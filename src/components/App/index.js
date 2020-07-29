// == Import npm
import React from "react";

// == Import
import "./styles.css";
import MessageList from "../MessagesList";
import MessageForm from "../MessageForm";

// == Composant
const App = () => (
  <div className="app">
    <MessageList list={[{ id: 1, author: "Dorian", content: "wazzzzaaaaa" }]} />
    <MessageForm
      onMessageSend={() => {
        console.log("Ok je dois envoyer le message");
      }}
      onInputChange={() => {
        console.log("L'user a tapé dans l'input");
      }}
      message="Je suis en cours de rédacti"
    />
  </div>
);

// == Export
export default App;
