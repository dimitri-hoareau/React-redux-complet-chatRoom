import React from "react";
import { FiSend } from "react-icons/fi";
import "./style.scss";

const MessageForm = () => {
  return (
    <form className="message-form">
      <input
        className="message-form_input"
        type="text"
        placeholder="Saisissez votre message"
      />
      <FiSend className="message-form_submit" />
    </form>
  );
};

export default MessageForm;
