import mongoose, { Document, Schema } from "mongoose";

interface User {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  profilePic?: string;
  followers?: string[];
  followings?: string[];
  posts?: string[];
  comments?: string[];
  likes?: string[];
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
}

// Créer un type personnalisé qui étend Document et inclut l'interface User
type UserDocument = User & Document;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
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
  posts: {
    type: [Schema.Types.ObjectId],
    default: [],
  },
  comments: {
    type: Array,
    default: [],
  },
  likes: {
    type: Array,
    default: [],
  },
  resetPasswordToken: {
    type: String,
    default: "",
  },
  resetPasswordExpires: {
    type: Date,
    default: Date.now,
  },
});

// Utilisez le type personnalisé pour définir le modèle
const User = mongoose.model<UserDocument>('User', userSchema);

export default User;