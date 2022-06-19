const express = require("express");
const router = require("./network/router");
const morgan = require("morgan");
const cors = require("cors");
require("./db");

const WHITE_LIST = process.env.WHITE || "http://localhost:3000";
const OPTIONS = {
  origin: (origin, callback) => {
    if (WHITE_LIST.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("You don't have access"));
    }
  },
};
// App
const app = express();
// Config
app.set("PORT", process.env.PORT || 3001);
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(OPTIONS));
app.use(morgan("dev"));
// Router
router(app);
// Static
app.use("/", express.static("public"));
// Port
app.listen(app.get("PORT"), () => {
  console.log("Is connect");
});
