import React from "react";
import { FiSend } from "react-icons/fi";
import PropTypes from "prop-types";
import "./style.scss";

const MessageForm = ({ onInputChange, onMessageSend, message }) => {
  return (
    <form
      className="message-form"
      onSubmit={(e) => {
        e.preventDefault();
        onMessageSend();
      }}
    >
      <input
        className="message-form_input"
        type="text"
        onChange={(e) => {
          console.log("Hey changement");
          onInputChange(e.target.value);
        }}
        value={message}
        placeholder="Saisissez votre message"
      />
      <FiSend
        onClick={() => {
          console.log("clic");
          onMessageSend();
        }}
        className="message-form_submit"
      />
    </form>
  );
};

MessageForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onMessageSend: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default MessageForm;
