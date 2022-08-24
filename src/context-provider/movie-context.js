import React from "react";

const MovieContext = React.createContext({
    movies: [],
    featuredMovie: null,
    dispatchMovieAction: () => {}
});


export default MovieContext;