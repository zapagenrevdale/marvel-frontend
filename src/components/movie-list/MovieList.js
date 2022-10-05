import React, { useContext, useMemo} from "react";
import Container from "./subcomponent/Container";
import ShiftedContainer from "./subcomponent/ShiftedContainer";
import MovieGroupContainer from "./subcomponent/MovieGroupContainer";
import MovieContext from "../../context-provider/movie-context";
import Modal from "../shared/modal/Modal";
import ModalContext from "../../context-provider/modal-context"

const MovieList = () => {
  
  const modalContext = useContext(ModalContext)
  const movieContext = useContext(MovieContext);

  // Added useMemo just in case another state is added in the future
  const topMovies = useMemo(() => {
    return movieContext.movies
      .sort(
        (movie1, movie2) =>
          parseFloat(movie2.imdb.metascore) - parseFloat(movie1.imdb.metascore)
      )
      .slice(0, 25);
  }, [movieContext.movies]);

  // Added useMemo just in case another state is added in the future
  const inFinitySaga = useMemo(() => {
    return movieContext.movies
      .filter((movie) => movie.saga === "Infinity Saga")
      .sort((movie1, movie2) =>
        movie2.release_date > movie1.release_date ? -1 : 1
      );
  }, [movieContext.movies]);

  const multiverseSaga = useMemo(() => {
    return movieContext.movies.filter(
      (movie) => movie.saga === "Multiverse Saga"
    );
  }, [movieContext.movies]);


  if (movieContext.movies.length === 0) {
    return <div></div>;
  }

  return (
    <Container>
      <ShiftedContainer>
        <MovieGroupContainer
          movies={topMovies}
          title={"Top 25 Marvel Movies"}
        />
        <MovieGroupContainer
          movies={inFinitySaga}
          title={"Infinity Saga"}
        />
        <MovieGroupContainer
          movies={multiverseSaga}
          title={"Multiverse Saga"}
        />
      </ShiftedContainer>
      {modalContext.show && <Modal movie={modalContext.movie}/>}
    </Container>
  );
};

export default MovieList;
