import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">
        <img
          className="logo"
          alt="movie logo"
          src="https://cdn.shopify.com/s/files/1/1416/8662/products/psycho_1960_linen_original_film_art_1200x.jpg?v=1593534654"
        />

        <h1>Horror Movies</h1>

      </header>
    );
  }

}

export default Header;