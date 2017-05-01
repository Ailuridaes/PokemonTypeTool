import React from 'react';
import SearchPokemon from '../containers/SearchPokemon';
import SetTypes from '../containers/SetTypes';
import MatchupTypeChart from '../containers/MatchupTypeChart';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h1>Pokemon Type Tool</h1>
        </div>
        <SearchPokemon />
        <SetTypes />
        <MatchupTypeChart />
      </div>
    );
  }
}

export default App;
