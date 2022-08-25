import React, { useMemo } from "react";
import style from "./TopMovies.module.css";
import Carrousel from "../../../shared/Carrousel";

const TopMovies = (props) => {
  // Added useMemo just in case another state is added in the future
  const topMovies = useMemo(() => {
    return props.movies
      .sort((movie1, movie2) => movie2.imdb.Metascore - movie1.imdb.Metascore)
      .slice(0, 30);
  }, [props.movies]);

  return (
    <section className={style.container}>
      <h2 className={style.header}>Top 30 Marvel Movies</h2>
      <Carrousel movies={topMovies} />
    </section>
  );
};

export default TopMovies;
