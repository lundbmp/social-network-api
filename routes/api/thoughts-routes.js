const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  addNewThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts/
router.route("/").get(getAllThoughts).post(addNewThought);

// /api/thoughts/:id
router
  .route("/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reations/
router.route("/:thoughtId/reactions/").post(addReaction);

// /api/thoughts/:thoughtId/reations/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
