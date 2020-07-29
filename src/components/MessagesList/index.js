import React from "react";
import "./style.scss";

const MessageList = () => {
  return (
    <div className="message-list">
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

const Message = () => {
  return (
    <div className="message">
      <div className="message_author">Test Auteur</div>
      <div className="message_content">Hey salut ça va ?</div>
    </div>
  );
};

export default MessageList;
