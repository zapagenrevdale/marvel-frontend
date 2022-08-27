import React from "react";
import style from "./Summary.module.css";
import Button from "./buttons/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'

const Summary = (props) => {

    return (
        <section className={style.summary}>
            <h1 className={style.summary__Title}>
                {props.title}
            </h1>
            <p className={style.summary__Text}>
                {props.overview}
            </p>
            <div className={style["button-container"]}>
                <Button type="play">
                    <FontAwesomeIcon icon={faPlay} className={style.icon}/> Play
                </Button>
                <Button type="details">
                    <FontAwesomeIcon icon={faCircleInfo} className={style.icon}/> More Info
                </Button>
            </div>
        </section>
    );

}


export default Summary;