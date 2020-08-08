import React from "react";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Chat from "./Chat/chat";
import "./chatwindow.css";

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.pushMessage = this.pushMessage.bind(this);
  }

  //handling change of input values and setting the state of input
  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  // handling add the values of input to the array of data for list
  pushMessage(event) {
    event.preventDefault();
    if (this.state.userInput.value !== "") {
      var uniq = "id" + new Date().getTime();
      this.setState((prevState) => {
        return {
          uniqueInd: uniq,
          userInput: "",
          data: this.state.data.concat({
            userInput: prevState.userInput,
            botMessage: "",
          }),
        };
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center"> Very Simple Chatbot </h1>
        <hr />
        <div className="chatBox" id="chatBox">
          <Chat chat={this.state.data}></Chat>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="please write query.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={this.state.userInput}
              onChange={this.handleChange}
            />
            <InputGroup.Append>
              <Button variant="primary" onClick={this.pushMessage}>
                Send
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default ChatWindow;
