const { Router } = require("express");
const router = Router();

const userRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const AUTH_MIDDLEWARE = require("../middlewares/auth.middleware");

router.use("/users", [AUTH_MIDDLEWARE], userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
