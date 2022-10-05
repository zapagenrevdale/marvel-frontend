import React from "react";
import style from "./RatedInfo.module.css";

const RatedInfo = (props) => {
  return (
    <div className={style.info}>
      <p className={style["rated-paragraph"]}>{props.rated}</p>
    </div>
  );
};

export default RatedInfo;
