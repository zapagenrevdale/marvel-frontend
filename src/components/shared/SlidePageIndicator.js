import React from "react";
import style from "./SlidePageIndicator.module.css";

const PageIndex = (props) => {
  const className = style.indicator + " " + props.classes;
  return <div className={className} />;
};

const SlidePageIndicator = (props) => {
  let pageIndicator = [];


  for (let i = 0; i < props.length; i++) {
    pageIndicator.push(
      <PageIndex classes={i === props.active && style.active} />
    );
  }

  return <div className={style.slide__Indicator}>{pageIndicator}</div>;
};

export default React.memo(SlidePageIndicator);
