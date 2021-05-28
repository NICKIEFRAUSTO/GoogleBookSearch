import React from "react";


function Jumbotron (){
  return(
<div> 
<Jumbotron>
  <h1>!Google Book Search</h1>
    <p>
    Search for a book by title or author!
    </p>
  </div>

  <div>  
  function searchForm(props){
 return (
  <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
} 
  </div>
</Jumbotron>
</div>

  )
}

export default Jumbotron;