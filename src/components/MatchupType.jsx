import React from 'react';

const MatchupType = (props) => {
  return (
    <div style={getDivStyle(props.type)}>
        {props.type}
    </div>
  );
};

function getDivStyle(type) {
  return {
    background: `var(--${type.toLowerCase()}-color)`,
    display: "inline-block",
    width: "58px",
    lineHeight: "1",
    margin: "2px",
    padding: "5px 0",
    border: "1px solid #aaa",
    borderRadius: "2px",
    color: "#fff",
    fontSize: "10px",
    textAlign: "center",
    textShadow: "1px 1px 1px #333",
    textTransform: "uppercase"
  }
};

export default MatchupType;