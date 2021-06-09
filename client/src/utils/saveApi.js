import axios from "axios";


  export default {
    // -----------------------Get saved books-------------------------------------------//
    getBooks: function () {
      axios.get('/api/books')
      .then((response)=>{
        const data = response.data;
        this.setState({books:data});
        console.log('Saved books data has been received');
      })
      .catch(()=>{
        alert('Error retrieving saved books');
      });
    },
    // --------------------------Deletes the book with the given id----------------------------//
    deleteBook: function(id) {
       axios.delete("/api/books/" + id)
      
    },
    // --------------------------Saves a book to the database---------------------------------//
    saveBook: function(volumeInfo) {
      return axios.post("/api/books", volumeInfo)
      .then (res => 
        alert ('book saved successfully'))
    },
    
    getAllBooks: function(){
      return axios.get("*")
    }
  };