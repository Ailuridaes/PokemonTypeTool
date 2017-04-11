import React from 'react';
import { connect } from 'react-redux';
import SetTypes from '../containers/SetTypes';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>React Type Tool</h1>
        </div>
        <SetTypes />
      </div>
    );
  }
}

export default App;
