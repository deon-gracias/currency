const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: 0,
  },
  date:{
      type:Date,
      default:Date.now
  }
});

const users = mongoose.model("users", usersSchema);

module.exports = users;