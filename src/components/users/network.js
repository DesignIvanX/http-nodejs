const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");
const mail = require("../email/network");
const router = express.Router();

router.get("/", (req, res) => {
  const { email } = req.query;

  controller
    .get(email)
    .then((data) => {
      response.success(req, res, data, 200, "[Success] - get users correctly!");
    })
    .catch((e) => {
      response.success(req, res, e, 500, "[Internal Error] - not get users.");
    });
});

router.post("/", (req, res) => {
  const { name, email, career } = req.body;

  controller
    .add(name, email, career)
    .then((data) => {
      mail.sendEmail(req, res, name, email, career);
      response.success(req, res, data, 201, "[Success] - created correctly!");
    })
    .catch((e) => {
      response.success(
        req,
        res,
        e,
        500,
        "[Internal Error] - could not be created."
      );
    });
});

router.delete("/", (req, res) => {
  const { id } = req.query;
  controller
    .delete(id)
    .then((id) => {
      response.success(
        req,
        res,
        `Delete ${id}`,
        200,
        "[Success] - successfully removed!"
      );
    })
    .catch((e) => {
      response.success(
        req,
        res,
        e,
        500,
        "[Internal Error] - could not be deleted."
      );
    });
});

module.exports = router;
