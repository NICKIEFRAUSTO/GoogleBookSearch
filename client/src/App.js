import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchResultContainer from "./Components/SearchResultContainer";
import Home from "./pages/Home";

import Jumbotron from "../src/Components/Jumbotron";


function App() {
  return (
    <Router>
      <div> 
      <Jumbotron />       
      <Switch>
      <Route exact path ="/">
      <Home/>
      </Route>
      <SearchResultContainer/>
      {/* <Route exact path ="/saved"></Route>
      </Switch> */}
      </div>
    </Router>
  )
};

export default App;
