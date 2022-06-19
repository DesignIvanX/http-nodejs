const mongoose = require("mongoose");

const url =
  process.env.DB_NAME ||
  "mongodb+srv://admin:admin1223x@cluster0.iv3vu.mongodb.net/users";

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Conection has been made! DB");
  })
  .on("error", function (e) {
    console.log("Error is: ", e);
  });

module.exports = mongoose;
