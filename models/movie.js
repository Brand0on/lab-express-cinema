//require mongoose
const mongoose = require("mongoose");

//Instance new schema

const movieSchema = new mongoose.Schema({
  title: String,
  director: String,
  stars: [String],
  image: String,
  description: String,
  showtimes: [String],
});

//create model out of schema

const Movie = mongoose.model("Movie", movieSchema);

//Export model
module.exports = Movie;
