const router = require("express").Router();
const movieController = require("../controllers/movieController");

router.get("/getall");
router.get("getone");
router.post("/", movieController.createMovie);
router.put("/:id");
router.delete("/:id");

module.exports = router;
