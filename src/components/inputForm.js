import React, { Component } from "react";
import InputField from "./inputField";

// creates the form to enter data
// manages the amount and behavior of input fields

class InputForm extends Component {
  constructor(props) {
    super(props);
  }
  //TODO: iterate over each object key to display inputfields

  render() {
    const { personal, work, education, handler } = this.props;
    return (
      <>
        <InputField
          placeholder="full name"
          value={personal.fullName}
          onChange={handler}
          fieldId="full-name"
          category="personal"
          field="fullName"
        />

        <div id="work-input-container">
          
          {work.map((item, index) => {
            return (
              <div key={index}>
                <InputField
                  placeholder="company"
                  value={item.company}
                  onChange={handler}
                  fieldId={`company${index}`}
                  category="personal"
                  field="fullName"
                />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default InputForm;
