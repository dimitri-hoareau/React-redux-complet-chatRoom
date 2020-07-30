import axios from "axios";
import { LOGIN_SUBMIT } from "../action";

// un middleware est une triple fonction fléchée
// vous recevreze toujours (dans cet ordre)
// store (pour consulter le state ou dispatcher des actions)
// next (pour dire si oui ou non l'action doit continuer son chemin)
// action (l'objet d'action)

// Pour voir un shéma animé: https://miro.medium.com/max/2880/1*QERgzuzphdQz4e0fNs1CFQ.gif

const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_SUBMIT:
      axios({
        method: "post",
        url: "http://localhost:3001/login",
        data: store.getState().loginData,
      })
        .then((res) => {
          // Ici j'ai dans res.data ce que m'a renvoyé le server
          // (le username)
          // dispatcher un nouveau type d'action (LOGIN_SUBMIT_SUCCESS)
          // et y accrocher le username
        })
        .catch((err) => {
          // Il y a eu une erreur
          // dispatcher un nouveau type d'action (LOGIN_SUBMIT_ERROR)
          // et y accrocher le message d'erreur par exemple
        });
    default:
      return;
  }
  // Pour chaque action que je reçois, je veux examiner
  // le type. Si le type d'action reçu nécessite une requête
  // Je lance moi-même ici la requête.

  // Si cette requête est un succès, je veux
  // informer mon reducer du resultat en dispatchant une
  // nouvelle action

  // Sinon, je vais vouloir informer mon reducer de l'erreur
};

export default ajaxMiddleware;
