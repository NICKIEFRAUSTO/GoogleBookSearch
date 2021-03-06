const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id:{
    type: String,
  },
    title: { 
      type: String, 
      required: true 
    },
    authors:  {
      type:Array, 
      required: true 
    },
    description:{
      type: String,
    }, 
    link:{
      type: String,
    }, 
    image:{
      type: String,
    } 

  });
  
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;
 