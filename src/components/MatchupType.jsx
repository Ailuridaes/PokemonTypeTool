import React from 'react';

const divStyleBase = {
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