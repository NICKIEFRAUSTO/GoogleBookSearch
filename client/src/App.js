import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Saved from "./Components/SavedList";
import Nav from "./Components/Navbar";



function App() {
  return (
    <Router>
      <div> 
        <Nav />
          <Switch>
            <Route exact path ="/">
              <Home />
            </Route>
            <Route exact path = "/saved">
              <Saved />
            </Route>
          </Switch> 
     
      </div>
    </Router>
  )
};

export default App;
