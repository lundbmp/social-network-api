const { Thought, User } = require("../models");

const thoughtController = {
  // get all thoughts
  async getAllThoughts(req, res) {
    try {
      const dbThoughtData = await Thought.find();
      res.status(200).json(dbThoughtData);
    } catch (error) {
      res.status(500).json({ message: "error at getAllThoughts: " + error });
    }
  },
  // get thought by id
  async getSingleThought({ params }, res) {
    try {
      const dbThoughtData = await Thought.find({ _id: params.id });
      res.status(200).json(dbThoughtData);
    } catch (error) {
      res.status(404).json({ message: "error at getSingleThought: " + error });
    }
  },
  // create new thought (must be added to users thought array)
  async addNewThought({ body }, res) {
    try {
      const dbThoughtData = await Thought.create(body);
      const dbUserData = await User.findOneAndUpdate(
        { _id: body.userId },
        { $push: { thoughts: dbThoughtData["_id"] } },
        { new: true }
      );
      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(500).json({ message: "error at addNewThought: " + error });
    }
  },
  // update thought
  async updateThought({ params, body }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndUpdate(
        { _id: params.id },
        { thoughtText: body.thoughtText },
        { new: true }
      );

      res.status(200).json(dbThoughtData);
    } catch (error) {
      res.status(404).json({ message: "error at updateThought: " + error });
    }
  },
  // delete thought (remove from users array)
  async deleteThought({ params }, res) {
    try {
      const dbThoughtData = await Thought.findOneAndDelete({ _id: params.id });
      const dbUserData = await User.findOneAndUpdate(
        { username: dbThoughtData.username },
        { $pull: { thoughts: dbThoughtData.id } },
        { new: true }
      );

      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(404).json({ message: "error at deleteThought: " + error });
    }
  },
  // create reaction (added to thought array)
  async addReaction(req, res) {},
  // delete reaction (remove from thought array)
  async deleteReaction(req, res) {},
};

module.exports = thoughtController;
