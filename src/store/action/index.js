// Créer un type d'action (INPUT_MESSAGE_CHANGE)

export const INCREMENT = "INCREMENT";

// Créer un action creator qui renvoie un objet
// avec le bon type. Il va aussi falloir récupèrer
// dans les paramètres ce qui a été saisi par l'user
// et le mettre dans action.value

export const increment = (truc) => ({
  type: INCREMENT,
  value: truc,
});
