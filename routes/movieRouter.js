const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/getall", movieController.getAllMovies);
router.get("/:id", movieController.getOneMovie);
router.post("/", movieController.createMovie);
router.put("/:id");
router.delete("/:id");

module.exports = router;
