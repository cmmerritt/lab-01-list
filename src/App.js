import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import moviesData from './movies.js';
import MovieSearch from './MovieSearch';
import './App.css';

class App extends Component {
  state = {
    movies: moviesData
  }

  handleSearch = ({ nameSearch, sortField }) => {
    const titleRegex = new RegExp(nameSearch, 'i');

    const searchedData = moviesData
      .filter(movie => {
        if (sortField === 'year') {
          return movie.year.toString().match(titleRegex);
        } else if (sortField === 'subgenre') {
          return movie.subgenre.match(titleRegex);
        } return !nameSearch || movie.title.match(titleRegex);
      });
      
    this.setState({ movies: searchedData });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="App">

        <Header/>
    
        <MovieSearch onSearch={this.handleSearch}/>

        <main>
          <MovieList movies={movies}/>
        </main>
      
        <Footer />

      </div>
    );
  }

}

export default App;
