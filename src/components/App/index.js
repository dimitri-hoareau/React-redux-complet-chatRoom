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
    <Login
      opened={true}
      onOpenClick={() => {
        console.log("open or close login form");
      }}
      loginData={{
        email: "test@machin.com",
        password: "123456",
      }}
      onInputChange={(changedData) => {
        console.log(changedData);
      }}
    />
    <MessageList />
    <MessageForm />
  </div>
);

// == Export
export default App;
