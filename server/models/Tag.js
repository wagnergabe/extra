const { Schema } = require("mongoose");

const tagSchema = new Schema({
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
});

module.exports = tagSchema;
