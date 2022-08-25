import React from "react";
import style from "./MovieCard.module.css";

const MovieCard = (props) => {
  
  console.log("rendered")
  return (
    <div className={style.card}>
      <img className={style.image} src={props.movie.cover_url} alt={props.movie.title} />
    </div>
  );
};

export default MovieCard;
