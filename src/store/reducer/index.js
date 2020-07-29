// Importer le type d'action auquel tu veux réagir
import { INCREMENT } from "../action";
const initialState = {
  count: 0,
  messages: [
    { id: 1, author: "Dorian", content: "wazzzzaaaaa" },
    { id: 2, author: "Axel", content: "50 balles" },
  ],
  messageInput: "message en cours de redacti",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    // case INPUT_MESSAGE_CHANGE
    // Renvoyer le state tel qu'il était
    // MAIS en changeant la propriété
    // messageInput, et lui donner en valeur
    // ce qui a été tapé par l'user
    // (action.value par exemple)
    default:
      return state;
  }
};
