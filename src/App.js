import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import GenreList from "./components/GenreList";
import MovieList from "./components/MovieList";

import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import About from "./pages/About";
import Search from "./pages/Search";

function App() {
   return (
    <>
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          
          <Route path="/genre-list" >
            <GenreList />
          </Route>

          <Route path="/search/:search" >
            <Search />
          </Route>

          <Route path="/movie-list" >
            <MovieList />
          </Route>

          <Route path="/about" >
            <About />
          </Route>

          <Route path="/movie-detail/:id" >
            <MovieDetail />
          </Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </>
  );
}

export default App;
