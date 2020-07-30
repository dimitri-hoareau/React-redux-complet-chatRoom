import React from "react";
import "./style.scss";

const Login = () => {
  return (
    <div className="settings">
      <div className="settings-button">+</div>
      <form className="settings-form">
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
