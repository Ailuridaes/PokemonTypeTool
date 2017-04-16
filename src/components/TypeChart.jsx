import React from 'react';
import MatchupType from './MatchupType'

const TypeChart = (props) => {
  const layout = [
    { damage: "quadruple", display: "4x" },
    { damage: "double", display: "2x" },
    { damage: "half", display: "1/2x" },
    { damage: "quarter", display: "1/4x" },
    { damage: "zero", display: "0x" }
  ];

  return (
    <div>
      {layout.map(d => {
        return (
          <div key={d.damage}>
            <h3>{d.display}</h3>
            {props.matchups[d.damage].map(type =>
              <MatchupType key={type} type={type} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TypeChart;