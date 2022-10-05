import React, {useContext} from "react";
import style from "./Summary.module.css";
import Button from "../../shared/buttons/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import ModalContext from "../../../context-provider/modal-context";

const Summary = (props) => {

    const modalContext = useContext(ModalContext);
    return (
        <section className={style.summary}>
            <h1 className={style.summary__Title}>
                {props.featured.title}
            </h1>
            <p className={style.summary__Text}>
                {props.featured.imdb.plot}  
            </p>
            <div className={style["button-container"]}>
                <Button type="play">
                    <FontAwesomeIcon icon={faPlay} className={style.icon}/> Play
                </Button>
                <Button type="details" method={ () => modalContext.toggleModal(props.featured)}>
                    <FontAwesomeIcon icon={faCircleInfo} className={style.icon}/> More Info
                </Button>
            </div>
        </section>
    );

}


export default Summary;