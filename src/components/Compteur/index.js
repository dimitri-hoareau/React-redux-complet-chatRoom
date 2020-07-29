/* eslint-disable react/button-has-type */
import React from "react";
import PropTypes from "prop-types";

const Compteur = ({ count, increment }) => (
  <div>
    <p>{count} clic(s)</p>
    <button
      onClick={() => {
        increment();
      }}
    >
      Incrémenter
    </button>
  </div>
);

Compteur.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Compteur;
