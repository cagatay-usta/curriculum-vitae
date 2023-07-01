import { Component } from "react";
import InputForm from "./components/inputForm";

class App extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "john carmack",
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      fullName: e.target.value,
    });
  }

  render() {
    return (
      <InputForm
        fullName={this.state.fullName}
        handler={this.onChangeHandler}
      />
    );
  }
}

export default App;
