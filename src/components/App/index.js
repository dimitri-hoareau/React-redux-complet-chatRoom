// == Import npm
import React from "react";

// == Import
import "./styles.css";
import MessageList from "../MessagesList";
import MessageForm from "../MessageForm";

// == Composant
const App = () => (
  <div className="app">
    <MessageList />
    <MessageForm />
  </div>
);

// == Export
export default App;
