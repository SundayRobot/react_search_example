import React from "react";
import axios from 'axios';
import "./index.css";
import Form from './components/Form';
import ReturnedItems from './components/ReturnedItems';




class App extends React.Component{
  constructor(props){
    super(props)
    this.state = { returneditems : [], blank: '',resultlength: '', inputValue: '' }
    this.getDatafromApi = this.getDatafromApi.bind(this);
  }
  

  componentDidMount = ()=>{
    const returned = localStorage.getItem("theitems");
    const jsondata = JSON.parse(returned);
    this.setState({returneditems: jsondata })
  }

  componentDidUpdate = ()=>{
    const itemly = JSON.stringify(this.state.returneditems);
    localStorage.setItem('theitems', itemly);
  }

  getDatafromApi = (e) =>{
    e.preventDefault();
    const searchterm = e.target.elements.input_field.value;
    
    if(searchterm.value === '' || searchterm.length === 0){
        this.setState({ returneditems: [], 
          blank: '[ Please type something into the search field ]',
          resultlength: ''
         })
        console.log(this.state.blank);

    }else if(searchterm.length > 0 || searchterm.value !== ''){
        axios.get(`https://images-api.nasa.gov/search?q=${searchterm}`)
        .then(data=>{
          const items = data.data.collection.items;
          this.setState({ 
            returneditems: items, 
            blank: '', 
            resultlength: items.length,
            inputValue : searchterm })
        });
      }

      this.setState({
        returneditems : [], blank: '',resultlength: '', inputValue: ''
      })
    
      // searchterm.value = ''
      
    }

  

  render(){
    // console.log(this.state.returneditems.length)
    const resultForSearchterm = `[ ${this.state.resultlength} results for "${this.state.inputValue}" ]`;
    return (
      <div>
        <header>
          <Form getResultsFunction = {this.getDatafromApi}/>
        </header>
        <div className="main-container">
          <p className="noentries">{this.state.returneditems.length < 1 ? `no results for "${this.state.inputValue}"`: this.state.blank}</p>
          <ReturnedItems itemsinstate = {this.state.returneditems} />
       </div>
      </div>
    );
  }
}

export default App;