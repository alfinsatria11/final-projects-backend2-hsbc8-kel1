const { Router } = require("express");
const router = Router();

const userRoutes = require("./users.routes");

router.use(userRoutes);

module.exports = router;
