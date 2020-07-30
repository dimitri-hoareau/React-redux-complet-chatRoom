// == Import npm
import React from "react";

// == Import
import "./styles.css";
import MessageList from "../../containers/MessageList";
import MessageForm from "../../containers/MessageForm";
import Login from "../Login";

// == Composant
const App = () => (
  <div className="app">
    <Login />
    <MessageList />
    <MessageForm />
  </div>
);

// == Export
export default App;
