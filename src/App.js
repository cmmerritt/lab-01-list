import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
// import moviesData from './movies.js';
// import MovieSearch from './MovieSearch';
import request from 'superagent';
import './App.css';

const MOVIES_APP_URL = 'https://lab-06-node.herokuapp.com/api/movies';

class App extends Component {
  state = {
    // movies: moviesData
    movies: []
  }

  async componentDidMount() {
    const response = await request.get(MOVIES_APP_URL);
    this.setState({
      movies: response.body
    });
  }

/*   handleSearch = ({ nameSearch, sortField }) => {
    const titleRegex = new RegExp(nameSearch, 'i');
    console.log(nameSearch);

    const searchedData = moviesData
      .filter(movie => {
        if (sortField === 'year') {
          return movie.year.toString().match(titleRegex);
        } else {
          return !nameSearch || movie.title.match(titleRegex);
        }
      });
      
    this.setState({ movies: searchedData });
  } */

  render() {
    const { movies } = this.state;

    return (
      <div className="App">

        <Header/>
    
        {/* <MovieSearch onSearch={this.handleSearch}/> */}

        <main>
          <MovieList movies={movies}/>
        </main>
      
        <Footer />

      </div>
    );
  }

}

export default App;
