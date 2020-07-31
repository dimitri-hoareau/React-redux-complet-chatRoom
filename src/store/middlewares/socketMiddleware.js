import { LOGIN_SUBMIT_SUCCESS, MESSAGE_SEND, messageReceived } from '../action';
// Je crée ma connection en dehors du middleware
// pour qu'elle reste active. Sinon ma variable
// socket serait détruite à chaque fois que mon
// middleware aurait terminé son code
let socket;

const socketMiddleware = (store) => (next) => (action) => {
  // Puis j'examine le type pour réagir en fonction
  switch (action.type) {
    case LOGIN_SUBMIT_SUCCESS: {
      // Je me connecte au server
      socket = window.io('http://localhost:3001');

      // Je veux commencer à écouter les messages
      // sur 'send_message'
      socket.on('send_message', (message) => {
        console.log(message);
        // J'envoie le message reçu jusqu'à mon reducer
        store.dispatch(messageReceived(message));
      });

      // Je récupère l'auteur dans l'action
      const author = action.payload;
      // J'envoie un mesage pour informer tout le monde
      socket.emit('send_message', {
        content: `L'utilisateur ${author} a rejoint le chat`,
        author,
      });
      break;
    }

    case MESSAGE_SEND: {
      const { messageInput, username } = store.getState();
      if (messageInput.length === 0) {
        return;
      }
      socket.emit('send_message', {
        content: messageInput,
        author: username,
      });
      break;
    }
    default:
  }
  // Je laisse passer l'action dans tous les cas
  next(action);
};

export default socketMiddleware;
