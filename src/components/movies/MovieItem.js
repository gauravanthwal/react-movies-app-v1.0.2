import React from "react";
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { getMovie} from '../../redux/actions/moviesAction'


const MovieItem = ({ movie, getMovie }) => {
    
    const onClick = () =>{
        getMovie(movie.imdbID)
    }
  return (
    <div className="card">
      <Link onClick={onClick} to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt="movies" />
      </Link>
    </div>
  );
};

export default connect( null, { getMovie})(MovieItem);
