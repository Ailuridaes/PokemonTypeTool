import React from 'react';
import MatchupType from './MatchupType'

const TypeChart = (props) => {
  return (
    <div>
      <h3>4x</h3>
      {props.matchups.quadruple.map(type =>
        <MatchupType key={type} type={type} />
      )}
      <h3>2x</h3>
      {props.matchups.double.map(type =>
        <MatchupType key={type} type={type} />
      )}
      <h3>1/2x</h3>
      {props.matchups.half.map(type =>
        <MatchupType key={type} type={type} />
      )}
      <h3>1/4x</h3>
      {props.matchups.quarter.map(type =>
        <MatchupType key={type} type={type} />
      )}
      <h3>0x</h3>
      {props.matchups.zero.map(type =>
        <MatchupType key={type} type={type} />
      )}
    </div>
  );
};

export default TypeChart;