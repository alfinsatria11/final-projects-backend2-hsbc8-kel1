const { Router } = require("express");
const router = Router();

const { userControllers } = require("../controllers");

router.get("/users", userControllers.getUsers);

module.exports = router;
