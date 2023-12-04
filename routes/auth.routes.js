const { Router } = require("express");
const router = Router();

const { authControllers } = require("../controllers");

router.post("/login", authControllers.login);

module.exports = router;
