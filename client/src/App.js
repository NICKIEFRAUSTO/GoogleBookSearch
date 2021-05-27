import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>        
      <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>
          <Route exact path="/saved">
            
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
