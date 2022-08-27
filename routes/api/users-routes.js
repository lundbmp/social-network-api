const router = require("express").Router();

function testRoute(req, res) {
    if(req.params.id) {
        res.status(200).json({ message: `route works ${req.params.id}` });
        return;
    } else if(req.params.userId && req.params.friendId) {
        res.status(200).json({ message: `route works ${req.params.userId} & ${req.params.friendId}` });
        return;
    }
  res.status(200).json({ message: "route works" });
}

// /api/users/
router.route("/").get(testRoute).post(testRoute);

// /api/users/:id
router.route("/:id").get(testRoute).delete(testRoute);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(testRoute).delete(testRoute);


module.exports = router;