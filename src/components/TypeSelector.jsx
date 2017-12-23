import React from 'react';

const selectStyleBase = {
  borderRadius: "6px"
};

class TypeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setType(e.target.value);
  }
  
  render() {
    let selectStyle = Object.assign({}, selectStyleBase, { background: `var(--${this.props.value.toLowerCase()}-color)`} );
    return (
      <select value={this.props.value} onChange={this.handleChange} style={selectStyle}>
        {this.props.types.map(type =>
          <option value={type} key={type} style={{background: `var(--${type.toLowerCase()}-color)`}}>
            {type}
          </option>
        )}
      </select>
    );
  }
}

export default TypeSelector;
