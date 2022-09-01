import React from "react";
import Header from "./layout/Header";
import Main from "./components/main/Main";
import MovieProvider from "./context-provider/MovieProvider";
import MovieList from "./components/movie-list/MovieList";
import ModalProvider from "./context-provider/ModalProvider";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MovieProvider>
        <ModalProvider>
          <Main />
          <MovieList />
        </ModalProvider>
      </MovieProvider>
    </React.Fragment>
  );
};

export default App;
