import React, { Component } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm"

function App() {
  return (
    <div className="App">
      <div className="App-header">        
      <h2>(React) Google Book Search</h2>
      <p className="App-intro">
        Search for and save books of interest.
      </p>
      <SearchForm/>
      </div>
    </div>
  );
}


export default App;
