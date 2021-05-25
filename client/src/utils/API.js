import axios from "axios";

const BASEURI = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "AIzaSyDfhAeZ6OsOqDFOeNsuOOdZZ2O4nqzEiaI";

// Export an object with a "search" method that searches the GoogleBooks API for the passed query
export default {
  search: function(query) {
    // console.log("query", BASEURI+query)
    return axios.get(BASEURI+query);
  }
};
