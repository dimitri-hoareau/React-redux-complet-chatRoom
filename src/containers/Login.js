import { connect } from "react-redux";
import Login from "../components/Login";
import { toggleLoginForm, loginInputChange } from "../store/action";
const mapStateToProps = (state) => ({
  opened: state.loginOpened,
  loginData: state.loginData,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: () => {
    console.log("open or close login form");
    dispatch(toggleLoginForm());
  },
  onInputChange: (changedData) => {
    console.log(changedData);
    dispatch(loginInputChange(changedData));
  },
  onFormLogin: () => {
    console.log("Il ya eu submit !");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
