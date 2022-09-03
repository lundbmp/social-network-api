const { Thought } = require("../models");

const thoughtController = {
  // get all thoughts
  async getAllThoughts(req, res) {},
  // get thought by id
  async getSingleThought(req, res) {},
  // create new thought (must be added to users thought array)
  async createThought(req, res) {},
  // update thought
  async updateThought(req, res) {},
  // delete thought (remove from users array)
  async deleteThought(req, res) {},
  // create reaction (added to thought array)
  async createReation(req, res) {},
  // delete reaction (remove from thought array)
  async deleteReaction(req, res) {},
};

module.exports = thoughtController;
