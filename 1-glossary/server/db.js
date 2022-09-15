require("dotenv").config();
const mongoose = require("mongoose");

const glossarySchema = new mongoose.Schema ({
  word: String,
  definition: String,
  category: String,
  isWord: Boolean,
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
      isWord: obj.isWord,
    })
    Saved.save()
  })
  console.log('SAVED!')
}

let add = (params) => {
  return DB_.find(params)
  .then((results) => {
    return results;
  }).catch((err) => {
    console.log(err)
  })
}

let check = (input, params) => {
  return DB_.find(params)
    .then((data) => {
     if(data.length > 0) {
       console.log(params)
       throw params
     } else {
       return data
     }
  })
  .catch((params) => {
    console.log('DELETED')
    return DB_.deleteMany(params)
  })
    .then(() => {
      insert(input)
      console.log('Data Added')
      return input
    })
    .then((data) => {
      return data
    })
 }


module.exports = {
  insert,
  add,
  check,
}