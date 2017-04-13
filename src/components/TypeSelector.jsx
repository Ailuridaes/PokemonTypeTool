import React from 'react';

class TypeSelector extends React.Component {
  constructor(props) {
        super(props);
        this.state = {selectedType: this.props.types[0]};

        this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selectedType: e.target.value });
    this.props.setType(e.target.value);
  }

  render() {
    return (
      <select value={this.state.selectedType} onChange={this.handleChange}>
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
