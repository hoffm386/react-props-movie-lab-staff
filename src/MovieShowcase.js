import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // Solution branch does fancy but error-prone spread operator
    // return movieData.map((data, idx) => <MovieCard key={idx} {...data} />);

    // The => and no {} allows you to avoid the `return` keyword inside the
    // `map` callback.  Docs say "this style can be abused" but I'm not sure
    // exactly what that would mean https://reactjs.org/docs/lists-and-keys.html
    return movieData.map((movieProps, index) =>
      <MovieCard key={index}
                 title={movieProps.title}
                 IMDBRating={movieProps.IMDBRating}
                 genres={movieProps.genres}
                 poster={movieProps.poster} />
    );
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
