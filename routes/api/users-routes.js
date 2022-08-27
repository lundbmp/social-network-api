const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/users/
router.route("/").get(getAllUsers).post(addUser);

// /api/users/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
