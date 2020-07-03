import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./chatwindow.css";

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      botOutput: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  //handling change of input values and setting the state of input
  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  // handling add the values of input to the array of data for list
  handleAdd(event) {
    if (this.state.value !== "") {
      //   this.setState((prevState) => {
      //     return {
      //       value: "",
      //       data: this.state.data.concat({
      //         task: prevState.value,
      //         done: false,
      //       }),
      //     };
      //   });
      // } else {
      //   alert("Please Enter the task name Before adding!");
      // }

      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center"> Very Simple Chatbot </h1>
        <hr />
        <div className="chatBox" id="chatBox">
          <InputGroup className="mb-3">
            <FormControl
              placeholder="please write query.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={this.state.userInput}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button variant="primary">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
