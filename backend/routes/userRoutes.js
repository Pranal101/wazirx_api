const express = require("express");
const { fetchData } = require("../controllers/userController");
const router  = express.Router();

router.route("/fetch").get(fetchData)

module.exports = router;

