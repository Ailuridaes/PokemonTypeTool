import { connect } from 'react-redux';
import { setTypes } from '../actions';
import TypeForm from '../components/TypeForm';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (types) => {
      dispatch(setTypes(types));
    }
  }
};

const SetTypes = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeForm);

export default SetTypes;
