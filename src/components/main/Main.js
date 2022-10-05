import React, { useContext, useEffect } from "react";
import useHTTP from "../../hooks/UseHTTP";
import MovieContext from "../../context-provider/movie-context";
// component-related imports
import style from "./Main.module.css";
import Summary from "./subcomponents/Summary";
import Container from "./subcomponents/layout/Container";
import RatedInfo from "./subcomponents/RatedInfo";

const Main = () => {
  const movieContext = useContext(MovieContext);
  const {
    loading: fetchMoviesLoading,
    error: fetchMoviesError,
    sendRequest: fetchMovies,
  } = useHTTP();

  const {
    loading: fetchFeaturedLoading,
    error: fetchFeaturedError,
    sendRequest: fetchFeatured,
  } = useHTTP();

  useEffect(() => {
    const setMovies = (movies) => {
      movieContext.dispatchMovieAction({
        type: "SET_MOVIES",
        payload: { movies },
      });
    };

    const setFeatured = (movie) => {
      movieContext.dispatchMovieAction({
        type: "SET_FEATURED",
        payload: { featuredMovie: movie },
      });
    };

    fetchMovies(
      {
        url: "http://localhost:5000/marvel",
        method: "GET",
      },
      setMovies
    ).catch((e) => console.log(e.message || "Error on React hook"));

    fetchFeatured(
      {
        url: "http://localhost:5000/marvel/featured",
        method: "GET",
      },
      setFeatured
    ).catch((e) => console.log(e.message || "Error on React hook"));
  }, []);

  if (movieContext.movies.length === 0 || !movieContext.featuredMovie) {
    return <div></div>;
  }

  const featured = movieContext.featuredMovie;
  let trailer_url = featured["trailer_url"];

  if (trailer_url.includes("youtu.be")) {
    trailer_url = trailer_url.replace("youtu.be/", "youtube.com/embed/");
    const featuredMovieID = trailer_url.split("embed/")[1];
    trailer_url += `?rel=0&amp;autoplay=1&mute=1&loop=1&playlist=${featuredMovieID}`;
  } else {
    trailer_url += "&muted&autoplay&loop=1";
  }

  return (
    <main className={style.main}>
      <iframe
        className={style["background-video"]}
        src={`${trailer_url}`}
        title="SPIDER-MAN: NO WAY HOME - Official Teaser Trailer (HD)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Container>
        <Summary featured={featured} />
        <RatedInfo rated={featured.imdb.rated} />
      </Container>
    </main>
  );
};

export default Main;
