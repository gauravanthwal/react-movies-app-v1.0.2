import {
  GET_MOVIES,
  SET_LOADING,
  SET_ERROR,
  SERACH_MOVIE,
  GET_MOVIE,
  GET_FAVORITES,
  ADD_FAVORITE,
} from "../../actions/types";

const initialState = {
  movies: [],
  movie: {},
  favorites: [],
  loading: false,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      console.log(action.payload);
      return {
        ...state,
        movies: action.payload.Search,
        loading: false,
      };
    
    case GET_MOVIE:
        return{
            ...state,
            movie: action.payload,
            loading: false
        }

    case GET_FAVORITES: 
        return{
          ...state,
          favorites: action.payload,
          loading: false
        }

    case SERACH_MOVIE:
      return {
        ...state,
        movies: action.payload.Search,
        loading: false,
      };

    case ADD_FAVORITE:
      return{
        ...state,
        favorites: [...state.favorites, action.payload],
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
