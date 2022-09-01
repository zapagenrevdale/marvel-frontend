import React from "react";
import style from "./MovieCard.module.css";

const MovieCard = (props) => {
  
  return (
    <div className={style.card} onClick={props.toggleModal}>
      <img className={style.image} src={props.movie.cover_url} alt={props.movie.title} />
    </div>
  );
};

export default MovieCard;
