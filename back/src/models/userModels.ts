import mongoose from "mongoose";

interface User {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  profilePic?: string;
  followers?: string[];
  followings?: string[];
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "",
  },
  followers: {
    type: Array,
    default: [],
  },
  followings: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model('User', userSchema);

export default User;