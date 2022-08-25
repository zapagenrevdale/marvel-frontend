import React from "react";
import MovieCard from "./MovieCard";

const List = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </>
  );
};

export default React.memo(List);
