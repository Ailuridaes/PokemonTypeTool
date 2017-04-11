import React from 'react';

class TypeSelector extends React.Component {
  constructor(props) {
        super(props);
        this.state = {selectedType: ''};

        this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ selectedType: e.target.value });
    // can clear titleError when title is edited
    if (this.state.titleError && e.target.name === 'title') {
      this.setState({
        titleError: ''
      })
    }
  }

  render() {
    return (
      <select value={this.state.selectedType} onChange={this.handleChange}>
        <option value="">NONE</option>
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
