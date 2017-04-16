import { connect } from 'react-redux';
import TypeChart from '../components/TypeChart';

const mapStateToProps = (state, ownProps) => {
  return {
    matchups: state.matchups
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
};

const MatchupTypeChart = connect(
  mapStateToProps,
  mapDispatchToProps
)(TypeChart);

export default MatchupTypeChart;
