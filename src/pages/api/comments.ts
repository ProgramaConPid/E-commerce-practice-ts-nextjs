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

  if (req.method === "GET") {
    const comments = await Comment.find().limit(10);
    return res.status(200).json(comments);
  }

  if (req.method === "POST") {
    const { text, author } = req.body;
    const newComment = await Comment.create({ text, author });
    return res.status(201).json(newComment);
  }

  return res.status(405).json({ message: "Method not allowed" });
}
