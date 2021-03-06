// == Import npm
import React from 'react';

// == Import
import './styles.css';
import MessageList from '../../containers/MessageList';
import MessageForm from '../../containers/MessageForm';
import Login from '../../containers/Login';
import Error from '../../containers/Error';

// == Composant
const App = () => (
  <div className="app">
    <Login />
    <Error />
    <MessageList />
    <MessageForm />
  </div>
);

// == Export
export default App;
