// un middleware est une triple fonction fléchée
// vous recevreze toujours (dans cet ordre)
// store (pour consulter le state ou dispatcher des actions)
// next (pour dire si oui ou non l'action doit continuer son chemin)
// action (l'objet d'action)

const logMiddleware = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export default logMiddleware;
