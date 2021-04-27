import { Component } from 'react';
import './MovieSearch.css';

export default class MovieSearch extends Component {
  state = {
    nameSearch: '',
    sortField: ''
  }

  handleNameSearch = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const { nameSearch, sortField } = this.state;

    return (
      <form className="MovieSearch" onSubmit={this.handleSubmit}> 
        <input
          name="nameSearch"
          value={nameSearch}
          onChange={this.handleNameSearch}
        />

        <select 
          name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}
        >
          <option value="">sort...</option>
          <option value="name">by name</option>
          <option value="year">by year</option>
        </select>

        <button>take a stab</button>

      </form>
    );
  }
}