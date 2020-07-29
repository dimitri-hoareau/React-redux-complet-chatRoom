import { connect } from "react-redux";
import MessageForm from "../components/MessageForm";

// - [x] mon composant consulte-t-il le state ?
// - [x] mon composant dispatch -t-il des actions ?

const mapState = (state) => ({
  message: state.messageInput,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (ceQuiAeteSaisi) => {
    console.log("user a tapé dans input: ", ceQuiAeteSaisi);
    // Je veux modifier mon state avec ce qui a été saisi
    // Je veux un type d'action et un action creator

    // dispatcher l'action grâce à l'action creator

    // Dans le reducer
    // Aller voir les commentaires

    // Dans  actions
    // aller voir les commentaires
  },
  onMessageSend: () => {
    console.log("user a envoyé le message");
  },
});

export default connect(mapState, mapDispatch)(MessageForm);
