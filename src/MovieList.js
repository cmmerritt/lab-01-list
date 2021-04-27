import React, { Component } from 'react';
import MovieItem from './MovieItem';
import './MovieList.css';

class MovieList extends Component {

  render() {
    const movies = this.props.movies;

    return (
      <ul className="MovieList">
        {movies.map(movie => (
          <MovieItem key={movie.title} movie={movie}/>
        ))}
      </ul>
    );
  }

}

export default MovieList;