const router = require("express").Router();
const movieRouter = require("./movieRouter");

router.use("/movie", movieRouter);

module.exports = router;
