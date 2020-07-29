// == Import npm
import React from "react";

// == Import
import "./styles.css";
import MessageList from "../../containers/MessageList";
import MessageForm from "../../containers/MessageForm";

// == Composant
const App = () => (
  <div className="app">
    <MessageList />
    <MessageForm />
  </div>
);

// == Export
export default App;
