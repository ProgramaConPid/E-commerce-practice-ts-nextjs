import type { NextApiRequest, NextApiResponse } from "next";
// Connection to MongoDB from lib/dbconnection.ts file
import connectDB from "@/lib/dbconnection";
// Model comments from database sample_mflix
import { Comment } from "@/database/models/comments.model";

// Function to handle the http request
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Wait until mongodb connect successfully
  await connectDB();

  // GET METHOD
  if (req.method === "GET") {
    const comments = await Comment.find().limit(20);
    return res.status(200).json(comments);
  }

  // POST METHOD
  if (req.method === "POST") {
    const { text, name } = req.body;
    const newComment = await Comment.create({ text, name });
    return res.status(201).json(newComment);
  }

  // PUT METHOD
  if (req.method === "PUT") {
    try {
      const { id, name, text } = req.body;
      const updateComment = await Comment.findByIdAndUpdate(id, { name, text });
      return res.status(200).json(updateComment)
    } catch (e) {
      console.log(e);
      return res.status(500).json("Error updating the comment")
    }
  }

  // DELETE METHOD
  if (req.method === "DELETE") {
    const { id } = req.query;
    const deleteUser = await Comment.findByIdAndDelete(id);
    return res.status(200).json(deleteUser);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
