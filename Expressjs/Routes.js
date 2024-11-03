const express = require("express");
const router = express.Router();
const Userdata = require("./UserControllers");
router.route("/data/v1/register").post(Userdata);

module.exports = router;
