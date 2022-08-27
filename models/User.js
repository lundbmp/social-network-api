const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, "Please enter a valid email address..."],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address...",
    ],
  },
  thoughts: [Thought],
  friends: [ {
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
});

// email validator
const validateEmail = (email) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const User = model("User", UserSchema);

module.exports = User;