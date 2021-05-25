const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooksdb"
  );

  const savedBookSeed =[
      {
          title: "King",
          authors:"T.M. Frazier",
          description:"Homeless. Hungry. Desperate. Doe has no memories of who she is or where she comes from. A notorious career criminal just released from prison, King is someone you don't want to cross unless you're prepared to pay him back in blood, sweat, sex or a combination of all three. King's future hangs in the balance. Doe's is written in her past. When they come crashing together, they will have to learn that sometimes in order to hold on, you have to first let go. King is the first book in a two part series. Tyrant is the name of the second book due out August 2015.",
          link:"https://books.google.com/books?id=5B4QswEACAAJ&dq=king&hl=&source=gbs_api"
      },
      {
          title: "Billy's Book",
          authors: "Terry Bisson",
          description: "True crime for kids. Or is it the happy childhood you never had? Thirteen tales. A wry, fantasy children's book to make adults laugh. Reminiscent of such greats as James Thurber and Lemony Snicket. Penned by SF troublemaker Terry Bisson, and illustrated by transreal cyberpunk Rudy Rucker. Also available in two paperback editions: an all-text 'Billy's Book,' and an illustrated large-format 'Billy's Picture Book.'",
          link: "https://play.google.com/store/books/details?id=kDv1DwAAQBAJ&source=gbs_api"
        
      },
      {
          title: "Hour of the Witch",
          authors: "Chris Bohjalian",
          description: "From the #1 New York Times bestselling author of The Flight Attendant, the enthralling story of a young Puritan woman who marries the wrong man and soon finds herself caught up in the violence and hysteria of the Salem Witch Trials",
          link: "https://books.google.com/books?id=YgB_zQEACAAJ&dq=hour&hl=&source=gbs_api"
      }
  ];

  db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });