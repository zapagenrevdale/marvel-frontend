import React, {useReducer} from "react";
import MovieContext from "./movie-context";


const defaultMovieListState = {
    movies: [],
    featuredMovie: null,
}

const movieReducer = (state, action) => {
    switch (action.type) {
        case "SET_MOVIES":
            return {
                ...state,
                movies: action.payload.movies,
            };
        case "SET_FEATURED":
            return {
                ...state,
                featuredMovie: action.payload.featuredMovie,
            };
        default:
            return state;
    }
}


const MovieProvider = (props) => {

    const [movieState, dispatchMovieAction] = useReducer(
        movieReducer,
        defaultMovieListState,
    );

    const movieContext = {
        movies: movieState.movies,
        featuredMovie: movieState.featuredMovie,
        dispatchMovieAction,
    }

    return (
        <MovieContext.Provider value={movieContext}>
            {props.children}
        </MovieContext.Provider>
    );
}


export default MovieProvider;