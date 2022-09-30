const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    commentContent: {
      type: String,
      required: "comment cannot be empty!",
      minlength: 1,
      maxlength: 500,
    },
    commentDate: {
      type: Date,
      required: "comment needs date stamp!",
      default: Date.now,
    },
    commentUser: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    commentPost: {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = Comment;
