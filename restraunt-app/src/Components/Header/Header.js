import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <Jumbotron>
      <h1>{props.name}</h1>
      <p>Here is an example of simple chatbot integration with dialog flow.</p>
      <p>
        <Button variant="primary">Chat</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
