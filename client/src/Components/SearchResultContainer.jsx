import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";
import API from "../utils/API";
import displaySavedBooks from "./SavedList";


class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
   
  };

  // --------------------------------When this component mounts, search the GoogleBooksAPI for books-------------------------------------//
  componentDidMount = () => {
    this.searchGoogleAPI("")
    
  }

  searchGoogleAPI = query => {
    API.search(query)
      .then(res => {
        console.log("results", res)
        this.setState({ results: res.data.items })})
      .catch(err => console.log(err));
      
  };


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // -------------------------------------When the form is submitted, search the GoogleBooksAPI for `this.state.search`--------------------------------//
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGoogleAPI(this.state.search);
    // this.displaySavedBooks(this.state.books);
    console.log(this.state.search);
  };

  render() {
    return (
      <div>
        
        <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList 
          results={this.state.results} 
          search={this.state.search}
        />
        
        

      </div>
    );
  }
}

export default SearchResultContainer;
