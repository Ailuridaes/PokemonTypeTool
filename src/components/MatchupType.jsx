import React from 'react';

const divStyleBase = {
  width: "calc(100% - 2px)",
  minWidth: "110px",
  lineHeight: "1",
  padding: "5px 0",
  border: "1px solid #aaa",
  borderRadius: "6px",
  color: "#fff",
  font: "1.2em arial, sans-serif",
  fontWeight: "bold",
  textAlign: "center",
  textShadow: "1px 1px 1px #333",
  textTransform: "uppercase"
};

const MatchupType = (props) => {
  var divStyle = Object.assign({}, divStyleBase, { background: `var(--${props.type.toLowerCase()}-color)` });
  
  return (
    <div style={divStyle}>
        {props.type}
    </div>
  );
};

export default MatchupType;