require("dotenv").config();
const mongoose = require("mongoose");

const glossarySchema = new mongoose.Schema ({
  word: String,
  definition: String,
  category: String,
  syllableCount: Number,
});

const DB_ = mongoose.model('DB_', glossarySchema);

mongoose.connect('mongodb://localhost/glossary', () => {
  console.log('Connected to Mongo DB!')
});

let insert = (array) => {
  array.map((obj) => {
    const Saved = new DB_({
      word: obj.word,
      definition: obj.definition,
      category: obj.category,
      syllableCount: obj.syllableCount
    })
    Saved.save()
  })
  console.log('SAVED!')
}

let check = (input) => {
  DB_.find()
  .then((results) => {
    console.log(results);
    if (results.length > 0) {
      DB_.deleteMany({})
      console.log('DELETED!!!')
    } else {
      console.log('EMPTY')
    }
    return input
  })
  .then((data) => {
    insert(data)
  });
}

let pull = () => {
  DB_.find()
  .then((results) => {
    return results;
  })
}


// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them
module.exports = {
  insert: insert,
  pull: pull,
  check: check,
}