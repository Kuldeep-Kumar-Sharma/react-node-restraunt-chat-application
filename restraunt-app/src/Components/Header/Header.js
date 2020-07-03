import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Header = (props) => {
  return (
    <Jumbotron>
      <h1>{props.name}</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Chat</Button>
      </p>
    </Jumbotron>
  );
};

export default Header;
