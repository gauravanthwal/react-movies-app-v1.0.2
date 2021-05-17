import {
  SET_LOADING,
  SET_ERROR,
  SERACH_MOVIE,
  GET_MOVIE,
  ADD_FAVORITE,
  GET_FAVORITES,
} from "./types";


let api_key;
if(process.env.NODE_ENV !== 'production'){
  api_key = process.env.REACT_APP_API_KEY
}else{
  api_key = process.env.API_KEY
}


// search movies
export const searchMovie = (text) => async(dispatch) =>{
    try {
        setLoading()
        const res = await fetch(
          `http://www.omdbapi.com/?s=${text}&apikey=${api_key}`
        );
        const data = await res.json()
        dispatch({
          type: SERACH_MOVIE,
          payload: data,
        }); 
    } catch (err) {
        dispatch({
          type: SET_ERROR,
          payload: err.message
        });
    }
}
// get a movie
export const getMovie = (imdbID) => async(dispatch) =>{
    try {
        setLoading()
        const res = await fetch(
          `http://www.omdbapi.com/?i=${imdbID}&apikey=${api_key}`
        );
        const data = await res.json()
        dispatch({
          type: GET_MOVIE,
          payload: data,
        }); 
    } catch (err) {
        dispatch({
          type: SET_ERROR,
          payload: err.message
        });
    }
}

// get favorite
export const getFavorites = (movies) => async (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: GET_FAVORITES,
      payload: movies
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message,
    });
  }
};
// add to favorite
export const addFavorite = (movie) => async (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: ADD_FAVORITE,
      payload: movie,
    });
  } catch (err) {
    dispatch({
      type: SET_ERROR,
      payload: err.message,
    });
  }
};




// set loading
export const setLoading = () =>{
    return({
        type: SET_LOADING
    })
}