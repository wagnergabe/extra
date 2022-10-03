const { Schema, model } = require("mongoose");

const tagSchema = new Schema(
  {
    tagId: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = tagSchema;
