import React from "react";
import "./style.scss";

const MessageList = () => {
  return (
    <div>
      <h3>Message List</h3>
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

const Message = () => {
  return <div>Message</div>;
};

export default MessageList;
