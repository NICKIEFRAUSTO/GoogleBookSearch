const router = require("express").Router();
const bookRoutes = require("./savedBook");

// Book routes
router.use("/books", bookRoutes);
//localhost:3000/api/books/

module.exports = router;
