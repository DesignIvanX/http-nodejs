const mongoose = require("mongoose");

const url = process.env.DB_NAME;

mongoose.connect(url, { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log("Conection has been made! DB");
  })
  .on("error", function (e) {
    console.log("Error is: ", e);
  });

module.exports = mongoose;
