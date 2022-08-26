import React from "react";
import style from "./MovieGroupContainer.module.css";
import Carrousel from "../../shared/Carrousel";

const MovieContainer = (props) => {

  return (
    <section className={style.container}>
      <h2 className={style.header}>{props.title}</h2>
      <Carrousel movies={props.movies} />
    </section>
  );
};

export default MovieContainer;
