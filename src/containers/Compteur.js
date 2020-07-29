import { connect } from "react-redux";
import Compteur from "../components/Compteur";
import { increment } from "../store/action";

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Compteur);
