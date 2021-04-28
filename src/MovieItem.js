import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {

  render() {
    const movie = this.props.movie;

    return (
      <li className="MovieItem">
        <h2>{movie.title}</h2>
        <img src={movie.url} alt={movie.title}/>
        <p>Year Made: {movie.year}</p>
        <p>Subgenre: {movie.subgenre}</p>
      </li>
    );
  }

}

export default MovieItem;