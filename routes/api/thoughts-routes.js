const router = require("express").Router();

function testRoute(req, res) {
    if(req.params.thoughtId) {
        res.status(200).json({ message: `route works ${req.params.thoughtId}` });
        return;
    }
  res.status(200).json({ message: "route works" });
}

// /api/thoughts/
router.route("/").get(testRoute).get(testRoute).post(testRoute).put(testRoute).delete(testRoute);

// /api/thoughts/:thoughtId/reations/
router.route("/:thoughtId/reactions/").post(testRoute).delete(testRoute);

module.exports = router;