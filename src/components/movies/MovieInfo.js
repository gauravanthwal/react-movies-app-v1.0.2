import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addFavorite, getFavorites } from "../../redux/actions/moviesAction";

const MovieInfo = ({ movie, addFavorite, favs }) => {
  let favMov = JSON.parse(localStorage.getItem("favMov") || "[]");

  const [showMore, setShowMore] = useState(true);
  const [btnShow, setBtnShow] = useState(favMov.fav);

  const addFav = () => {
    addFavorite(movie);
    setBtnShow(!btnShow);
    // add favorites to localstorage
    movie.fav = true;
    favMov.push(movie);
    localStorage.setItem("favMov", JSON.stringify(favMov));
  };

  // remove favorites from localstorage
  const remFav = () => {
    favMov = favMov.filter((fav) => fav.imdbID !== movie.imdbID);
    setBtnShow(!btnShow);
    localStorage.setItem("favMov", JSON.stringify(favMov));
  };

  const onClick = () => {
    setShowMore(!showMore);
  };

  return (<>
    <div className='container'>
      <div className="grid-4 ">
        <div>
          <img src={movie.Poster} alt="movies" />
        </div>
        <div>
          <h3 className="text-primary">{movie.Title}</h3>
          <span></span>
          <p className="para">
            Year: <span>{movie.Year}</span>
          </p>
          <p className="para">
            Released: <span> {movie.Released}</span>
          </p>
          <p className="para">
            Rated: <span> {movie.Rated}</span>
          </p>
          <p className="para">
            Duradion: <span> {movie.Runtime}</span>
          </p>
          <br />
          <p className="para">
            Production: <span> {movie.Production}</span>
          </p>
          <p className="para">
            Box-office: <span> {movie.BoxOffice}</span>
          </p>
          <br />
          <p className="para">
            Imdb : <span> {movie.imdbRating}</span>
            <i className="material-icons text-primary">star</i>
          </p>

          {btnShow && (
            <button className="btn btn-success styled-btn" onClick={remFav}>
              <i className="material-icons">bookmarks</i> Remove Favorites
            </button>
          )}
          {!btnShow && (
            <button className="btn btn-primary styled-btn" onClick={addFav}>
              <i className="material-icons">bookmarks</i> Add to Favorites
            </button>
          )}

          <button className="btn btn-primary styled-btn" onClick={onClick}>
            {showMore ? "See Less" : "See More"}
          </button>
        </div>

        {showMore && (
          <div>
            <p className="para">
              Genre: <span> {movie.Genre}</span>
            </p>
            <p className="para">
              Director: <span> {movie.Director}</span>
            </p>
            <p className="para">
              Writer: <span> {movie.Writer}</span>
            </p>
            <p className="para">
              Actors: <span> {movie.Actors}</span>
            </p>
            <p className="para">
              Metascore:{" "}
              <span
                className={`badge ${
                  movie.Metascore > 55 ? "badge-success" : "badge-primary"
                }`}
                style={{ fontWeight: "bold" }}
              >
                {movie.Metascore}
              </span>
            </p>
          </div>
        )}
        <div></div>
      </div>
      {showMore && (
        <>
          <div className="border "> </div>
          <div > 
            <p className="para">Story plot:</p>
            <span> {movie.Plot}</span>
          </div>
        </>
      )}
    </div>
      
      </>
  );

  // return (
  //   <Fragment>
  //     <h3>Unable to load data</h3>
  //   </Fragment>
  // );
};
const mapStateToProps = (state) => ({
  movie: state.movie.movie,
  favs: state.movie.favorites,
});

export default connect(mapStateToProps, { addFavorite, getFavorites })(
  MovieInfo
);
