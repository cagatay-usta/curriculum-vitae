import React, { Component } from "react";
import InputField from "./inputField";

// creates the form to enter data
// manages the amount and behavior of input fields

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <InputField placeholder="full name" value={this.props.fullName} onChange={this.props.handler}/>
      </>
    );
  }
}

export default InputForm;
