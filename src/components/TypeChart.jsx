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
    <div style={styles.damageContainer}>
      {layout.map(d => {
        return (
          <div key={d.damage} style={styles.damageDiv}>
            <h3 style={{ flex: "-1 30px", padding: "0 18px 0 6px" }}>{d.display}</h3>
            <div style={{flex: "3 60px"}}>
              {props.matchups[d.damage].map(type =>
                <MatchupType key={type} type={type} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  damageDiv: {
    alignItems: "center",
    background: "#CCC",
    borderRadius: "6px",
    display: "flex",
    flexFlow: "row wrap",
    margin: "6px",
    padding: "12px",
    // one-third - margin * 6/3 - padding * 2
    width: "calc(33.33% - 12px - 24px)"
  },
  damageContainer: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center"
  }
};

export default TypeChart;