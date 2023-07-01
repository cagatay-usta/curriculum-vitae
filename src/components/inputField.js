import React, { Component } from "react";

class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { placeholder, value, onChange } = this.props;
    return (
      <>
        <input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e)}></input>
      </>
    );
  }
}

export default InputField;
