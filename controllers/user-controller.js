const { User } = require("../models");

const userController = {
  // getting all users
  async getAllUsers(req, res) {
    try {
      const dbUserData = await User.find();
      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(500).json({ message: "error at getAllUser: " + error });
    }
  },
  // get single user
  async getSingleUser({ params }, res) {
    try {
      const dbUserData = await User.findOne({ _id: params.id })
        .populate({ path: "thoughts" })
        .populate({ path: "friends" });

      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(404).json({ message: "cannot find user by id: " + error });
    }
  },
  // add new user
  async addUser({ body }, res) {
    try {
      const dbUserData = await User.create(body);
      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(500).json({ message: "error at addUser: " + error });
    }
  },
  // update singe user by id
  async updateUser({ params, body }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate({ _id: params.id }, body, {
        new: true,
      });
      if (!dbUserData) {
        res.status(404).json({ message: "no user found with that id" });
        return;
      }
      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(404).json({ message: "error at addUser: " + error });
    }
  },
  // delete user by id
  async deleteUser({ params }, res) {
    try {
      const dbUserData = await User.findOneAndDelete({ _id: params.id });
      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(404).json({ message: "no user found with that id" });
    }
  },
  // add friend to user
  async addFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $push: { friends: params.friendId } },
        { new: true }
      );
      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(404).json({ message: "no user found with that id" });
    }
  },
  // delete friend
  async deleteFriend({ params }, res) {
    try {
      const dbUserData = await User.findOneAndUpdate(
        { _id: params.userId },
        { $pull: { friends: params.friendId } },
        { new: true }
      );
      res.status(200).json(dbUserData);
    } catch (error) {
      res.status(404).json({ message: "no user found with that id" });
    }
  },
};

module.exports = userController;
