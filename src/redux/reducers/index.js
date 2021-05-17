import { combineReducers } from 'redux'
import moviesReducer from './movies/moviesReducer'

const rootReducer = combineReducers({
    movie: moviesReducer
})

export default rootReducer;