import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import "./App.css";
import PagesContainer from "./components/Pages/PagesContainer";
import Home from "./components/Pages/Home/Home";
import NavBarConatiner from "./components/Header/NavBarContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
          <NavBarConatiner />
          <PagesContainer />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
