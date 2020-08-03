import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { slideInLeft, slideInRight } from "animate.css";

class ItemDetail extends React.Component{
  state = {
    activeitem: [],
    activeTitle: [],
    activeDesc: [],
    activeKeywords: []
  }

  componentDidMount = async ()=>{
    const image = this.props.location.state.image;
    const title = this.props.location.state.title;
    const desc = this.props.location.state.desc;
    const keywords = this.props.location.state.keywords;
    const gotoapi2 = await axios.get(`https://images-api.nasa.gov/search?q=${title}`);
    const theResults2 = await gotoapi2.data.collection.items;
   
    this.setState({
      activeitem: image,
      activeTitle: title,
      activeDesc: desc,
      activeKeywords: keywords
    })
  }
  render(){
    console.log('hello',this.state.activeitem)
    return (
        <div className="item-detail">
          {this.state.activeitem.length !== 0 && 
          <div>
            <div className="item-detail-image-holder animate__animated animate__slideInLeft">
              <img className="item-detail-image" src={this.state.activeitem} alt="" />
            </div>
            <div className="item-detail-text animate__animated animate__slideInRight">
              <h2 className="item-detail-descriptive-heading">{this.state.activeTitle}</h2><br/>
              <p className="item-detail-descriptive-text">{this.state.activeDesc}</p>
              {this.state.activeKeywords ? 
              <div className="keyword-holder">
                <span>KEYWORDS: &nbsp;</span>
                {this.state.activeKeywords.map(kw=>{
                  return (
                      <span key={this.state.activeKeywords.indexOf(kw)}> [ &nbsp;{kw}&nbsp; ]</span>
                      )
                  })}
            </div>
            : '' }
          <button className="item-detail-go-back-button"><Link to="/">GO BACK</Link></button>
          </div>
        </div>
          }
      </div>

    );
  }
}

export default ItemDetail;