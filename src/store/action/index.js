// Créer un type d'action (INPUT_MESSAGE_CHANGE)

export const INCREMENT = "INCREMENT";
export const MESSAGE_INPUT_CHANGE = "MESSAGE_INPUT_CHANGE";
export const MESSAGE_SEND = "MESSAGE_SEND";
export const TOGGLE_LOGIN_FORM = "TOGGLE_LOGIN_FORM";
export const LOGIN_INPUT_CHANGE = "LOGIN_INPUT_CHANGE";
export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGIN_SUBMIT_SUCCESS = "LOGIN_SUBMIT_SUCCESS";
export const LOGIN_SUBMIT_ERROR = "LOGIN_SUBMIT_ERROR";
// Créer un action creator qui renvoie un objet
// avec le bon type. Il va aussi falloir récupèrer
// dans les paramètres ce qui a été saisi par l'user
// et le mettre dans action.value

export const loginSubmitSuccess = (payload) => ({
  type: LOGIN_SUBMIT_SUCCESS,
  payload,
});

export const loginSubmitError = (payload) => ({
  type: LOGIN_SUBMIT_ERROR,
  payload,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
});

export const messageSend = () => ({
  type: MESSAGE_SEND,
});

export const messageInputChange = (payload) => ({
  type: MESSAGE_INPUT_CHANGE,
  payload, // payload -> la donnée que je veux faire parvenir jusqu'à mon reducer
});

export const increment = () => ({
  type: INCREMENT,
});
