const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
} = require("../../controllers/user-controller");

function testRoute(req, res) {
  if (req.params.id) {
    res.status(200).json({ message: `route works ${req.params.id}` });
    return;
  } else if (req.params.userId && req.params.friendId) {
    res.status(200).json({
      message: `route works ${req.params.userId} & ${req.params.friendId}`,
    });
    return;
  }
  res.status(200).json({ message: "route works" });
}

// /api/users/
router.route("/").get(getAllUsers).post(addUser);

// /api/users/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(testRoute).delete(testRoute);

module.exports = router;
