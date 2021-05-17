import React from "react";
import { connect } from "react-redux";
import MovieItem from "./MovieItem";
import Spinner from "../layouts/Spinner";

const Movies = ({ movies, error, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return (
      <div className="all-center">
        <h3 className="text-danger">opps.. {error}</h3>
        <h4>Please check your internet connection</h4>
        <a  href="/" className="btn btn-danger">
          <i className="material-icons">refresh</i>
        </a>
      </div>
    );
  }
  if (movies) {
    return (
      <div className="container">
        <h2>Your Searches.</h2>
        <div className="grid-5">
          {movies.map((movie, index) => (
            <MovieItem movie={movie} key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <p className="text-primary text-center">
        Type some movie name...{" "}
        <span className="material-icons text-primary">movie_creation</span>
      </p>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movie.movies,
  loading: state.movie.loading,
  error: state.movie.error,
});

export default connect(mapStateToProps)(Movies);
