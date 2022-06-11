const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  career: { type: String, required: true },
});

const model = mongoose.model("Users", mySchema);

module.exports = model;
