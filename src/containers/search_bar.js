import React, { Component } from 'react';

class SearchBar extends Component {

  constructor() {
    super();
    this.state = { init: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ init: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          className="form-control"
          placeholder = "taper le nom"
          onChange={this.onInputChange}
          value={this.state.init} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Chercher</button>
        </span>
      </form>
    );
  }
} 

export default SearchBar;