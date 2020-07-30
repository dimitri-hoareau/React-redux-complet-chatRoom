import { connect } from "react-redux";
import Login from "../components/Login";

const mapStateToProps = (state) => ({
  opened: state.loginOpened,
  loginData: state.loginData,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenClick: () => {
    console.log("open or close login form");
  },
  onInputChange: (changedData) => {
    console.log(changedData);
  },
  onFormLogin: () => {
    console.log("Il ya eu submit !");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
