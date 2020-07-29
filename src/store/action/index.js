// Créer un type d'action (INPUT_MESSAGE_CHANGE)

export const INCREMENT = "INCREMENT";
export const MESSAGE_INPUT_CHANGE = "MESSAGE_INPUT_CHANGE";
// Créer un action creator qui renvoie un objet
// avec le bon type. Il va aussi falloir récupèrer
// dans les paramètres ce qui a été saisi par l'user
// et le mettre dans action.value

export const messageInputChange = (payload) => ({
  type: MESSAGE_INPUT_CHANGE,
  payload, // payload -> la donnée que je veux faire parvenir jusqu'à mon reducer
});

export const increment = () => ({
  type: INCREMENT,
});
