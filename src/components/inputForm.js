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
          {work.map((listItem, index) => {
            return Object.keys(listItem).map((item, number) => {
              return (
                <div key={number}>
                  <InputField
                    placeholder={item}
                    value={listItem[item]}
                    onChange={handler}
                    category="work"
                    field={item}
                    fieldId={`work-${item}${index}${number}`}
                    position={index}
                  />
                </div>
              );
            });
          })}
        </div>

        <div id="education-input-container">
          {education.map((listItem, index) => {
            return Object.keys(listItem).map((item, number) => {
              return (
                <div key={number}>
                  <InputField
                    placeholder={item}
                    value={listItem[item]}
                    onChange={handler}
                    category="education"
                    field={item}
                    fieldId={`education-${item}${index}${number}`}
                    position={index}
                  />
                </div>
              );
            });
          })}
        </div>
      </>
    );
  }
}

export default InputForm;
