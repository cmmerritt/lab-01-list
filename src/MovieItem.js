import React, { Component } from 'react';
import './MovieItem.css';

class MovieItem extends Component {

  render() {
    return (
      <p>
        <li className="MovieItem">
          <h2>Psycho</h2>
          <img src="https://cdn.shopify.com/s/files/1/1416/8662/products/psycho_1960_linen_original_film_art_1200x.jpg?v=1593534654" alt="Psycho, Alfred Hitchcock, 1960"/>
          <p>Year: 1960</p>
        </li>
        <li className="MovieItem">
          <h2>Psycho</h2>
          <img src="https://cdn.shopify.com/s/files/1/1416/8662/products/psycho_1960_linen_original_film_art_1200x.jpg?v=1593534654" alt="Psycho, Alfred Hitchcock, 1960"/>
          <p>Year: 1960</p>
        </li>
      </p>
    );
  }

}

export default MovieItem;