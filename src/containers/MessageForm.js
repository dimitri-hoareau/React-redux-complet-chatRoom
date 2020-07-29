import { connect } from "react-redux";
import MessageForm from "../components/MessageForm";
import { messageInputChange, messageSend } from "../store/action";
// - [x] mon composant consulte-t-il le state ?
// - [x] mon composant dispatch -t-il des actions ?

const mapState = (state) => ({
  message: state.messageInput,
});

const mapDispatch = (dispatch) => ({
  onInputChange: (ceQuiAeteSaisi) => {
    console.log("user a tapé dans input: ", ceQuiAeteSaisi);
    dispatch(messageInputChange(ceQuiAeteSaisi));
  },
  onMessageSend: () => {
    console.log("user a envoyé le message");
    dispatch(messageSend());
  },
});

export default connect(mapState, mapDispatch)(MessageForm);
