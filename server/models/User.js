import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    imageURL: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      // This fields value can be either of these two.
      enum: ["member", "admin"],
      // By defualt its going to be user.
      default: "member",
    },
    auth_time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Creating a new Users collection in our MongoDB database with the given schema
const User = mongoose.model("User", UserSchema);

export default User;
