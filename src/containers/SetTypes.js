import { connect } from 'react-redux';
import { updateTypes } from '../actions';
import TypeForm from '../components/TypeForm';

const mapStateToProps = (state) => {
  return {
    type1: state.types[0],
    type2: state.types[1]
  };
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
