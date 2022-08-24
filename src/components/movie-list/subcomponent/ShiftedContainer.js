import React from "react";
import style from "./ShiftedContainer.module.css";

const ShiftedContainer = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default ShiftedContainer;
