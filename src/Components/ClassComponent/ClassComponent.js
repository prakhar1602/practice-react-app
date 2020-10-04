import React from 'react';
import './ClassComponent.css'

// class components

class ClassComponent extends React.Component {

  constructor(props) {
      super(props)  //inherits properties of react component 
      
      // State is accessible all over the class
      this.state = {
        name : "Nobody",
        email: "",
        validEmails: [] //intializing this as a list
       }
  }
  _buttonClick() {
    console.log("Button Clicked");
    //basic check condition
    if(this.state.name === "Nobody") {
      this.setState(
          { name:"Somebody" }
        )}
    else{
      this.setState(
          { name:"Nobody" }
        )
    }
    
}

//state is immutable 

  _formControl(){

  }

  _handleEmailInput(e) {
    console.log("value of e: ", e.target.value) //gets real time value of the input field

    const newEmail= e.target.value //saving the value


  // button to check if the eamil is fake or real
  
  checkValidEmail(emailStr){
    let splitStr = emailStr.split("@") //actively splitting the email
    if (splitStr.length ===2){
      return true
    }
    else{
      alert("invalid email") //used to send alert
      return false
    }
  }

  _handlerCheckEmail(a) { //basic function to check email using checkvalidemail conditions
    if( this.checkValidEmail(this.state.email) === true){
      let validEmails = this.state.validEmails
      validEmails.push(this.state.email)
      this.setState({validEmails: validEmails})
    }
    else{
      
    }
  }


  displayEmail() { //using this function we can add more logical capabilities to our action
    //let emailToDisplay = this.state.email

    //example of possible logic 
    // if(this.state.validEmail === true)
    // {
    //   return emailToDisplay
    // }
    // else{
    //   return ""
    // }

    let emailsToDisplay = this.state.validEmails
    console.log(emailsToDisplay)

  }

  displayValidEmails(){
    console.log("I will display: ", this.state.validEmails)
    const validEmails = this.state.validEmail
    let validEmailsList

    validEmailsList = validEmails.map((email, count) => { //works sorta like a for loop
      console.log(email,count);
      return (
        <li>{email}</li>
      )
    })

    return(
      <div>
        <ul>
          {validEmailsList}
        </ul>
      </div>

    )
  }
  //render method
  render(){

    console.log("STATE", this.state)

    // div is used to wrap all components together
    return (
      <div id="classcomponent container">  
      <p> Hello {this.state.name} </p>
      <button onClick={() => this._buttonClick()}>Change Name</button> 
      <p>-------</p> 
      <label for="fname">Insert Email: </label> 
      <br />
      <input onChange={(e) => this._handleEmailInput(e)} type="text" id="fname" name="fname" /> 
      <button customattribute = "enabled" onClick= {(a) => this._handlerCheckEmail(a)}>Check Email</button>
      <p>Valid Emails:</p>
      
      {this.displayValidEmails()}
      
      </div>
    )
  }
  //input and button are listeners 
  //In label we use a function which is not a listener now
  //Onchange is used to create a reactor for a input field
  //onclick is used for button
  //e,a is a synthetic event which happens when we react with the input space
  //custonattribute is just a constant
}

export default ClassComponent;
