import mongoose, { Document } from "mongoose";

interface Comment {
  _id: string;
  userId: string;
  postId: string;
  text: string;
  date: Date;
}

type CommentDocument = Comment & Document;

const commentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    max: 500,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model<CommentDocument>("Comment", commentSchema);

export default Comment;
