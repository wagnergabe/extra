const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI || "mongodb+srv://bootcamp:test@groupproject3.vqiizxt.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;