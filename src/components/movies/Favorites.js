import React, { Fragment } from "react";
import Spinner from "../layouts/Spinner";
import MovieItem from "../movies/MovieItem";
import { connect } from "react-redux";

const Favorites = ({ loading }) => {
  
  const favMov = JSON.parse(localStorage.getItem("favMov") || '[]');

  if (loading) {
    return <Spinner />;
  }

  if (favMov) {
    return (
      <div className="container ">
        <h2>Favorites</h2>
        <div className="grid-5">
          {favMov.map((movie, index) => (
            <MovieItem movie={movie} key={index}/>
          ))}
        </div>
      </div>
    );
  }
  return (
    <>
      <h2>Favorites</h2>
      <p className="text-primary text-center">
        No Favorite movie...
        <span class="material-icons text-primary">movie_creation</span>
      </p>
    </>
  );
};
const mapStateToProps = (state) => ({
  loading: state.movie.loading,
});

export default connect(mapStateToProps)(Favorites);
