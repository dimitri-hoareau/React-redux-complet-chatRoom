import React from "react";
import "./style.scss";

const Login = ({ opened, onOpenClick, loginData, onInputChange }) => {
  const handleInputChange = (evt) => {
    // Je souhaite avoir une propriété qui s'appelle soit email
    // soit password. Cette info est présente dans e.target.name.
    // J'ai récupéré cette info dans la variable name, et je veux un objet
    // qui aura soit email soit password en propriété.
    // J'ai donc besoin d'interpreter ce que vaut name.
    // Si je ne l'interprete pas,
    // je crée une propriété "name" au lieu de email / password
    const name = evt.target.name;

    onInputChange({
      [name]: evt.target.value,
    });
  };

  return (
    <div className="settings">
      <div className="settings-button" onClick={onOpenClick}>
        +
      </div>
      {opened && (
        <form className="settings-form">
          <input
            name="email"
            type="email"
            placeholder="email"
            value={loginData.email}
            onChange={handleInputChange}
          />
          <input
            name="password"
            type="password"
            placeholder="password"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <button type="submit">Se connecter</button>
        </form>
      )}
    </div>
  );
};

export default Login;
