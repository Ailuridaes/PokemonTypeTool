import { connect } from 'react-redux';
import { updateTypes } from '../actions';
import TypeForm from '../components/TypeForm';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (types) => {
      dispatch(updateTypes(types));
    }
  }
};

const SetTypes = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeForm);

export default SetTypes;
