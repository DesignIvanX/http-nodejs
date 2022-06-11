const users = require("../components/users/network");

const router = (server) => {
  server.use("/api/users", users);
};

module.exports = router;
