import { connect } from "react-redux";
import MessageList from "../components/MessagesList";

/*
  - [x] besoin de lire le state
  - [ ] besoin de dispatcher des actions pour le modifier
*/

const mapState = (state) => ({
  list: state.messages,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(MessageList);
// Ce que fait connect
// il reçoit en paramètre le Composant
// et il me return <Composant list={[{}, {}]} />
