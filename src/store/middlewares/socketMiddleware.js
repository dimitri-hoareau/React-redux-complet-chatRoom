import { LOGIN_SUBMIT_SUCCESS } from "../action";
// Je crée ma connection en dehors du middleware
// pour qu'elle reste active. Sinon ma variable
// socket serait détruite à chaque fois que mon
// middleware aurait terminé son code
let socket;

const socketMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case LOGIN_SUBMIT_SUCCESS:
      socket = window.io("http://localhost:3001");
      // Je veux donc commencer à écouter les messages
      // sur 'send_message'
      socket.on("send_message", (message) => {
        console.log(message);
        // J'envoie le message reçu jusqu'à mon reducer
        // dispatch(messageReceived(message))
      });

      socket.emit("send_message", {
        content: `L'utilisateur ${action.payload} a rejoint le chat`,
        author: action.payload,
      });
      break;
    default:
  }
};

export default socketMiddleware;
