import React from "react";

const ModalContext = React.createContext({
  modal: {
    show: false,
    movie: undefined,
  },
  toggleModal: () => {},
});

export default ModalContext;
