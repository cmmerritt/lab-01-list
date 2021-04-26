import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import moviesData from './movies.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
  
        My React App...
        <Header/>
    

        <main>
          <MovieList movies={moviesData}/>
        </main>
      
        <Footer />

      </div>
    );
  }

}

export default App;
