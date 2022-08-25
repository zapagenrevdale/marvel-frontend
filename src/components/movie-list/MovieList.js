import React, {useContext} from "react";
import Container from "./subcomponent/Container";
import ShiftedContainer from "./subcomponent/ShiftedContainer";
import TopMovies from "./subcomponent/top-movies/TopMovies";
import MovieContext from "../../context-provider/movie-context";
const MovieList = () => {

  const movieContext = useContext(MovieContext);

  if(movieContext.movies.length === 0){
    return <div></div>
  }
  return (
    <Container>
      <ShiftedContainer>
        <TopMovies movies={movieContext.movies}/>
      </ShiftedContainer>
    </Container>
  );
};

export default MovieList;
