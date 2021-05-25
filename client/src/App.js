import React from "react";
import "./App.css";
import SearchResultContainer from "./Components/SearchResultContainer";

function App() {
  return (
    <div className="App">
      <div className="App-header">        
      <h2>(React) Google Book Search</h2>
      <p className="App-intro">
        Search for and save books of interest.
      </p>
      <SearchResultContainer />;
      
      </div>
    </div>
  );
}


export default App;
