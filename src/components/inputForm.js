import React, { Component } from "react";
import InputField from "./inputField";

// creates the form to enter data
// manages the amount and behavior of input fields

class InputForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fullName, handler } = this.props;
    return (
      <>
        <InputField
          placeholder="full name"
          value={fullName}
          onChange={handler}
          fieldId="full-name"
          category="personal"
          field="fullName"
        />
      </>
    );
  }
}

export default InputForm;
