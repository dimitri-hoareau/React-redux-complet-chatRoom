import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const MessageList = ({ list }) => {
  return (
    <div className="message-list">
      {list.map((messageObject) => {
        return <Message key={messageObject.id} {...messageObject} />;
      })}
    </div>
  );
};

const Message = ({ author, content }) => {
  return (
    <div className="message">
      <div className="message_author">{author}</div>
      <div className="message_content">{content}</div>
    </div>
  );
};

MessageList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MessageList;
