const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const trim = true;
const required = true;
const lowercase = true;
const unique = true;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required,
      trim,
    },
    username: {
      type: String,
      required,
      unique,
      trim,
      lowercase,
    },
    email: {
      type: String,
      required,
      trim,
      unique,
    },
    password: {
      type: String,
      required,
      trim,
    },
    profile: {
      type: Buffer,
      required,
    },
    lastVerifyEmailSentAt: {
      type: Date,
      required,
      default: () => Date.now() - 1000 * 60,
    },
    emailVerified: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  { timestamps: true }
);

const users = model("users", usersSchema);

module.exports = users;
