import React from "react";

function ResultList(props) {
    let books=props.results;
    let rows=books.map(book=>(
       <tr key={book.title}>
        <td>{<img alt={book.volumeInfo.imageLinks.thumbnail} className= "img-fluid" src={book.volumeInfo.imageLinks.thumbnail} />}</td>
          <td><h3>{book.volumeInfo.title}</h3>
          <h4>{book.volumeInfo.authors}</h4>
          <p>{book.volumeInfo.description}</p>
          <a href={book.volumeInfo.infoLink}>{book.volumeInfo.infoLink}</a>
          </td>
          
        </tr>
      ))
      return (
        <div>
            <table className="table">
                <thead className ="thead-light">
                    <tr>
                        
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
      );
    
  
}

export default ResultList;

