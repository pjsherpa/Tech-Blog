// What we learnt in express

const router = require("express").Router();
const userRouter = require("./userRoutes");
const blogRoutes = require("./blogRoutes");

//Import our modular routers for users to the blog.
router.use("./users", userRoutes);
router.use("./blogs", blogRoutes);

module.exports = router;
