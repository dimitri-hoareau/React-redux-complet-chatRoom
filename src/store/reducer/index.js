// Importer le type d'action auquel tu veux réagir
import { v4 as uuidv4 } from 'uuid';
// J'importe les types d'action qui m'intéressent
import {
  MESSAGE_INPUT_CHANGE,
  MESSAGE_SEND,
  TOGGLE_LOGIN_FORM,
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_SUBMIT_SUCCESS,
  LOGIN_SUBMIT_ERROR,
  MESSAGE_RECEIVED,
} from '../action';

// Je décris mon state initial
const initialState = {
  loading: false,
  username: '',
  loginErrorMessage: '',
  messages: [],
  messageInput: '',
  loginOpened: false,
  loginData: {
    email: 'bouclierman@herocorp.io',
    password: 'jennifer',
  },
};

// Je décris mon state à tout instant
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case MESSAGE_SEND:
      return {
        ...state,
        messageInput: '',
      };
    case LOGIN_SUBMIT_SUCCESS:
      return {
        ...state,
        loading: false,
        username: action.payload,
        loginErrorMessage: '',
      };
    case LOGIN_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        username: '',
        loginErrorMessage: action.payload,
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true,
      };

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
    case MESSAGE_INPUT_CHANGE:
      return {
        ...state,
        messageInput: action.payload,
      };

    default:
      return state;
  }
};
