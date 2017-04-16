import React from 'react';
import SetTypes from '../containers/SetTypes';
import MatchupTypeChart from '../containers/MatchupTypeChart';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>Pokemon Type Tool</h1>
        </div>
        <SetTypes />
        <MatchupTypeChart />
      </div>
    );
  }
}

export default App;
