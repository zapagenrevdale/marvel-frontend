import React from "react";
import style from "./Button.module.css";


const Button = (props) => {
    let classes = style['main-button'];
    if(props.type === 'play') {
        classes += ` ${style.play}`;
    }else if(props.type === 'details'){
        classes += ` ${style.details}`;
    }else{
        classes += '';
    }

    return (
        <button onClick={props.method} className={classes}>
            {props.children}
        </button>
    );

}

export default Button;