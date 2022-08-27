const { Schema } = require("mongoose");

const ReactionSchema = new Schema(
  {
    reactionId: {
      reactionId: Schema.Types.ObjectId,
      default: () => new Schema.Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      //TODO: create dateFormat in utils get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = ReactionSchema;