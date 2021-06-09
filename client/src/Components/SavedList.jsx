
import React, {Component}from "react";
import axios from "axios";
import API from "../utils/saveApi";


class Saved extends Component{
    state = {
        _id: "",
        title: "",
        authors: "",
        description: "",
        link: "",
        image: "",
        alert: "",
        books:[]
    };



    componentDidMount = () => {
        this.getBooks();
        
    };

     getBooks = () => {
        axios.get('/api/books')
        .then((response)=>{
          const data = response.data;
          this.setState({books:data});
          console.log('Saved books data has been received');
        })
        .catch(()=>{
          alert('Error retrieving saved books');
        });
      };

      
      displaySavedBooks = (books) => {

        return books.map((book)=>(
            <div key={book._id}>
            <form>
                <h3>{book.title}</h3>
                  <button onClick={()=>API.deleteBook(book._id)}>Delete</button>             
                  <a href={book.link} target="_blank" rel="noopener noreferrer"> View Book Link</a> 
                <p>{book.description}</p>
              </form>
            </div>
        ));

      };



    render () {
        return(
            <div >
                
                    <h1>Saved Google Books</h1>
                        <div className="saved">
                        {this.displaySavedBooks(this.state.books)}
                        </div>
            </div>
        );
    };
}; 
export default Saved;
    