import React, { useContext, useEffect, useCallback } from "react";
import style from "./Modal.module.css";
import ReactDOM from "react-dom";

// customs
import ModalContext from "../../../context-provider/modal-context";
import {
  ModalContainer,
  ImageContainer,
  DetailsContainer,
  MetaDataContainer,
  LeftMetadaContainer,
  MetaDataDiv,
  RightMetaDataContainer,
  TagsDiv,
  StreamContainer,
  StreamDiv,
} from "./layout/Layout";

import {
  ImageContent,
  MetaDataContent,
  PlotContent,
  TagContent,
  StreamContent,
} from "./content/Contents";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.closeModal} />;
};

const ModelOverlay = (props) => {
  return (
    <ModalContainer>
      <ImageContainer>
        <ImageContent
          title={props.movie.title}
          backgroundUrl={props.movie.background_url}
        />
      </ImageContainer>
      <DetailsContainer>
        <MetaDataContainer>
          <LeftMetadaContainer>
            <MetaDataDiv>
              <MetaDataContent
                rating={props.movie.imdb.rating}
                year={props.movie.imdb.yaer}
                rated={props.movie.imdb.rated}
                runtime={props.movie.duration}
              />
            </MetaDataDiv>
            <PlotContent plot={props.movie.imdb.plot} />
          </LeftMetadaContainer>
          <RightMetaDataContainer>
            <TagsDiv>
              <TagContent
                actors={props.movie.imdb.actors}
                genres={props.movie.imdb.genre}
                awards={props.movie.imdb.awards}
              />
            </TagsDiv>
          </RightMetaDataContainer>
        </MetaDataContainer>
        <StreamContainer>
          <h3>Available On:</h3>
          <StreamDiv>
            <StreamContent stream_sites={props.movie.stream_sites} />
          </StreamDiv>
        </StreamContainer>
      </DetailsContainer>
    </ModalContainer>
  );
};

const Modal = () => {
  const modalContext = useContext(ModalContext);

  const closeModal = useCallback(() => {
    modalContext.toggleModal(undefined);
  }, [modalContext]);

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        closeModal();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [closeModal]);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay movie={modalContext.movie} closeModal={closeModal} />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default Modal;
