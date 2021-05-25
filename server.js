const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const path = require("path");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
// 
// ---------------Connect to the MongoDB------------------------------//
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb")

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});
