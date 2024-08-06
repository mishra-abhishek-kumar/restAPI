const router = require("express").Router();

router.get("/getall");
router.get("getone");
router.post("/");
router.put("/:id");
router.delete("/:id");

module.exports = router;
