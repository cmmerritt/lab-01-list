import { Component } from 'react';
import './MovieSearch.css';

export default class MovieSearch extends Component {

  render() {
    return (
      <form className="MovieSearch">
        <input/>

        <select>
          <option value="">sort...</option>
          <option value="name">by name</option>
          <option value="year">by year</option>
        </select>

        <button>take a stab</button>

      </form>
    );
  }
}