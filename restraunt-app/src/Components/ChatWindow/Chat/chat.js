import React from "react";
import ChatBubble from "../ChatBubble/chatbubble";

const Chat = (props) => {
  return props.chat.map((element, index) => (
    <div key={index}>
      <ChatBubble message={element.userInput}></ChatBubble>
    </div>
  ));
};

export default Chat;
