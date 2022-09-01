import React, { useState } from "react";
import ModalContext from "./modal-context";

const ModalProvider = (props) => {
  const [modal, setModal] = useState({ show: false, movie: undefined });

  const toggleModal = (movie) => {
    setModal((prev) => {
      return {
        movie: movie,
        show: !prev.show,
      };
    });
  };

  const modalContext = {
    movie: modal.movie,
    show: modal.show,
    toggleModal: toggleModal,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
