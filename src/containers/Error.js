import { connect } from 'react-redux';
import Error from '../components/Error';

const mapStateToProps = (state) => ({
  message: state.loginErrorMessage,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Error);
