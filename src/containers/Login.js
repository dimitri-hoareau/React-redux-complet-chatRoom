import { connect } from "react-redux";
import Login from "../components/Login";
import {
  toggleLoginForm,
  loginInputChange,
  loginSubmit,
} from "../store/action";
const mapStateToProps = (state) => ({
  opened: state.loginOpened,
  loginData: state.loginData,
  loading: state.loading,
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
    dispatch(loginSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
