// Importer le type d'action auquel tu veux réagir
import { v4 as uuidv4 } from "uuid";
import {
  MESSAGE_INPUT_CHANGE,
  MESSAGE_SEND,
  TOGGLE_LOGIN_FORM,
  LOGIN_INPUT_CHANGE,
} from "../action";
const initialState = {
  messages: [],
  messageInput: "",
  loginOpened: false,
  loginData: {
    email: "test@machin.com",
    password: "123456",
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        loginData: {
          ...state.loginData,
          ...action.payload,
        },
      };
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        loginOpened: !state.loginOpened,
      };
    case MESSAGE_SEND:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: uuidv4(),
            author: "anonyme",
            content: state.messageInput,
          },
        ],
        messageInput: "",
      };
    case MESSAGE_INPUT_CHANGE:
      return {
        ...state,
        messageInput: action.payload,
      };

    default:
      return state;
  }
};
