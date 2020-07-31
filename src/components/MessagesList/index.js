import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MessageList = ({ list, user }) => (
  <div className="message-list">
    {list.map((messageObject) => <Message key={messageObject.id} {...messageObject} connectedUser={user} />)}
  </div>
);

const Message = ({ author, content, connectedUser }) => (
  <div className={connectedUser === author ? 'message' : 'message right'}>
    <div className="message_author">{author}</div>
    <div className="message_content">{content}</div>
  </div>
);

MessageList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  user: PropTypes.string.isRequired,
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default MessageList;
