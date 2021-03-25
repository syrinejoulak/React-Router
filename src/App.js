import "./App.css";
import Navbar from "./Components/Navbar";
import { movies } from "./Components/movies";
import MovieList from "./Components/MovieList";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./Components/Description";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {},
      movies: movies,
      searchfield: "",
      rateCheck: 0,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event);
  };

  onRateChange = (event) => {
    this.setState({ rateCheck: event.target.value });
  };

  onAddChange = (newMovie) => {
    this.setState({ movies: [...this.state.movies, newMovie] });
  };
  setSelectedMovie = (blabla) => this.setState({ selectedMovie: blabla });

  render() {
    const filtredMovies = this.state.movies.filter((movies) => {
      return (
        movies.title
          .toLowerCase()
          .includes(this.state.searchfield.toLocaleLowerCase()) &&
        (this.state.rateCheck !== 6
          ? movies.rate >= parseInt(this.state.rateCheck)
          : movies.rate <= parseInt(this.state.rateCheck) + 1)
      );
    });

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <div>
                  <Navbar
                    onSearch={this.onSearchChange}
                    onRate={this.onRateChange}
                  />
                  <MovieList
                    movies={filtredMovies}
                    addMovie={this.onAddChange}
                    isAuthed={true}
                    setSelectedMovie={this.setSelectedMovie}
                  />
                </div>
              )}
            />
            <Route path="/description">
              <Description selectedMovie={this.state.selectedMovie} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
