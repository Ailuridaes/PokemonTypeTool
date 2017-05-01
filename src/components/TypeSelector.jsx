import React from 'react';

class TypeSelector extends React.Component {
constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setType(e.target.value);
  }

  render() {
    return (
      <select value={this.props.value} onChange={this.handleChange}>
        {this.props.types.map(type =>
          <option value={type} key={type}>
            {type}
          </option>
        )}
      </select>
    );
  }
}

export default TypeSelector;
