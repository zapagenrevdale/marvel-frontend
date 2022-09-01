import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import ModalContext from "../../context-provider/modal-context";

const List = (props) => {
  const modalContext = useContext(ModalContext);

  return (
    <>
      {props.movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
          toggleModal={() => modalContext.toggleModal(movie)}
        />
      ))}
    </>
  );
};

export default React.memo(List);
