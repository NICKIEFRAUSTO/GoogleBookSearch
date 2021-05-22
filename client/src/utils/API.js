import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
const APIKEY = "AIzaSyDfhAeZ6OsOqDFOeNsuOOdZZ2O4nqzEiaI";

// Export an object with a "search" method that searches the GoogleBooks API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
