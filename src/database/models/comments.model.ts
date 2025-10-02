import { Schema, model, models } from "mongoose";

const commentSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    text: { type: String },
    date: { type: Date },
  },
  {
    collection: "comments",
  }
);

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
