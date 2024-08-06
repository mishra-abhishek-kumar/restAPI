const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/getall", movieController.getAllMovies);
router.get("/:id", movieController.getOneMovie);
router.post("/", movieController.createMovie);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
