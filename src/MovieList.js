import React, { Component } from 'react';
import MovieItem from './MovieItem.js';
import './MovieList.css';

class MovieList extends Component {

  render() {
    return (
      <ul className="MovieList">
        <MovieItem/>
      </ul>
    );
  }

}

export default MovieList;