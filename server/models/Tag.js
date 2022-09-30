const { Schema } = require("mongoose");

const tagSchema = new Schema({
  category: {
    type: String,
  },
  location: {
    type: String,
  },
});

module.exports = tagSchema;
