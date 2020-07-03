import React from "react";
import "./App.css";
import Aux from "./Containers/Auxillary";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header/Header";
import ChatWindow from "./Components/ChatWindow/chatwindow";

function App() {
  return (
    <Aux>
      <Header name="Restraunt Chat Application"></Header>
      <ChatWindow></ChatWindow>
    </Aux>
  );
}

export default App;
