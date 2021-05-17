import "./App.css";
import env from 'dotenv'
import React from "react";
import Movies from "./components/movies/Movies";
import Favorites from './components/movies/Favorites'
import Nav from "./components/layouts/Nav";
import Footer from './components/layouts/Footer'
import MovieInfo from './components/movies/MovieInfo'
import About from './components/layouts/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
env.config()

function App() {
  return (
    <>
      <Router>
        <Nav />
        {/* alert component */}
          <Switch>
            <Route exact path="/">
              <Movies />
              <Favorites/>
              <Footer/>
            </Route>

            <Route exact path='/about'>
              <About/>
            </Route>

            <Route exact path='/movie/:imdbID' component={MovieInfo}/>
          </Switch>
        
      </Router>
    </>
  );
}

export default App;
