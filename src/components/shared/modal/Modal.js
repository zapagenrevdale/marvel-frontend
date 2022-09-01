import React, { useContext } from "react";
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
  StreamContent
} from "./content/Contents"

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.closeModal} />;
};


const ModelOverlay = (props) => {
  return (
    <ModalContainer>
      <ImageContainer>
        <ImageContent title={props.movie.title} />
      </ImageContainer>
      <DetailsContainer>
        <MetaDataContainer>
          <LeftMetadaContainer>
            <MetaDataDiv>
              <MetaDataContent
                rating={props.movie.imdb.imdbRating}
                year={props.movie.imdb.Year}
                rated={props.movie.imdb.Rated}
                runtime={props.movie.imdb.Runtime}
              />
            </MetaDataDiv>
            <PlotContent plot={props.movie.imdb.Plot} />
          </LeftMetadaContainer>
          <RightMetaDataContainer>
            <TagsDiv>
              <TagContent
                actors={props.movie.imdb.Actors}
                genres={props.movie.imdb.Genre}
                awards={props.movie.imdb.Awards}
              />
            </TagsDiv>
          </RightMetaDataContainer>
        </MetaDataContainer>
        <StreamContainer>
          <h3>Available On:</h3>
          <StreamDiv>
          <StreamContent />
          </StreamDiv>
        </StreamContainer>
      </DetailsContainer>
    </ModalContainer>
  );
};

const Modal = () => {
  const modalContext = useContext(ModalContext);

  const closeModal = () => {
    modalContext.toggleModal(undefined);
  };

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
