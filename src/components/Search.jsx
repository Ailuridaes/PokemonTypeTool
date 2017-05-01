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
        <input placeholder="Search for a Pokemon...." onChange={this.handleChange} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default Search;
