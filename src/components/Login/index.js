import React from "react";
import "./style.scss";

const Login = ({
  opened,
  onOpenClick,
  loginData,
  onInputChange,
  onFormLogin,
  loading,
}) => {
  const handleInputChange = (evt) => {
    // Je souhaite avoir une propriété qui s'appelle soit email
    // soit password. Cette info est présente dans e.target.name.
    // J'ai récupéré cette info dans la variable name, et je veux un objet
    // qui aura soit email soit password en propriété.
    // J'ai donc besoin d'interpreter ce que vaut name.
    // Si je ne l'interprete pas,
    // je crée une propriété "name" au lieu de email / password
    // const name = evt.target.name;
    const { name, value } = evt.target;

    onInputChange({
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormLogin();
  };

  return (
    <div className="settings">
      <div className="settings-button" onClick={onOpenClick}>
        +
      </div>
      {opened && loading && <div className="loading">Connexion...</div>}
      {opened && !loading && (
        <form className="settings-form" onSubmit={handleSubmit}>
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
