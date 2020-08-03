import React from "react";

const Form = (props) =>{
  return (
    <form onSubmit={props.getResultsFunction}>
      <input className= "input" type="text" name="input_field" />
      <button className="button">search</button>
    </form>
  )
}

export default Form;