import React, { Component, useEffect } from "react";
import API from "../utils/API";

import axios from "axios";

const getSavedBooks = async ()=>{
  const res = await axios.get("http://localhost:3001/api/books")
  console.log(res)
};
useEffect(()=>{
  getSavedBooks();
},[])
    
function savedGoogleBooks(props){
  let books = props.results.map;
}
//     return(
//       <ListGroup>
//       <ListGroup.Item>{books}</ListGroup.Item>
//       <button onclick={()=>API.deletebook(books)}>Delete</button>
//       </ListGroup>
//         )
// }
export default savedGoogleBooks;