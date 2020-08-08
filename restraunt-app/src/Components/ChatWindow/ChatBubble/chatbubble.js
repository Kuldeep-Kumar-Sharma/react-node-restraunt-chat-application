import React from "react";
import "./chatbubble.css";

const ChatBubble = (props) => {
  return <div className="chatbubble mb-3">{props.message}</div>;
};

export default ChatBubble;
