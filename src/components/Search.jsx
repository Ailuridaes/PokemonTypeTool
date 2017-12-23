import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {
    this.props.onSubmit(this.state.term);
  }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div>
        <input placeholder="Search for a Pokemon...." onChange={this.handleChange} style={styleBase} />
        <button onClick={this.onSubmit} style={styleBase}>Submit</button>
      </div>
    );
  }
}

const styleBase = {
  borderRadius: "6px"
};

export default Search;
