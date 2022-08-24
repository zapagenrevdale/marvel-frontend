import React from "react";
import Header from "./layout/Header";
import Main from "./components/main/Main";
import MovieProvider from "./context-provider/MovieProvider";
import MovieList from "./components/movie-list/MovieList"

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <MovieProvider>
        <Main />
        <MovieList />
      </MovieProvider>
    </React.Fragment>
  );
};

export default App;
