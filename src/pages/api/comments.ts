import type { NextApiRequest, NextApiResponse } from "next";
// Connection to MongoDB from lib/dbconnection.ts file
import connectDB from "@/lib/dbconnection";
// Model comments from database sample_mflix
import Comment from "@/database/models/comments.model";

export enum HTTP_CODES {
  OK = 200,
  CREATED_OK = 201,
  SERVER_ERROR = 500,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
}

type GetComments = { ok: true; message: string; response: object[] };
type PostComment = { ok: true; message: string; response: object };
type UpdateComment = {
  ok: true;
  message: string;
  updatedId: string;
  response: object;
};
type DeleteComment = {
  ok: true;
  message: string;
  deletedId: string;
  response: object;
};
type ErrorResponse = { ok: false; errorMessage: string };

type ApiResponse =
  | GetComments
  | PostComment
  | UpdateComment
  | DeleteComment
  | ErrorResponse;

// Function to handle the http request
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Wait until mongodb connect successfully
  await connectDB();

  // GET METHOD
  if (req.method === "GET") {
    try {
      const comments = await Comment.find().limit(20);
      return res
        .status(HTTP_CODES.OK)
        .json({
          ok: true,
          message: "comments obtained successfully",
          response: comments,
        });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({ ok: false, errorMessage: "Error, cannot get the comments" });
    }
  }

  // POST METHOD
  if (req.method === "POST") {
    try {
      const { text, name } = req.body;
      const newComment = await Comment.create({ text, name });
      return res
        .status(HTTP_CODES.CREATED_OK)
        .json({
          ok: true,
          message: "Comment posted successfully",
          response: newComment,
        });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({ ok: false, errorMessage: "Error, cannot post the comment" });
    }
  }

  // PUT METHOD
  if (req.method === "PUT") {
    try {
      const { id, name, text } = req.body;
      const updateComment = await Comment.findByIdAndUpdate(id, { name, text });
      return res
        .status(HTTP_CODES.OK)
        .json({
          ok: true,
          message: "Comment updated successfully",
          updatedId: id,
          response: updateComment,
        });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({ ok: false, errorMessage: "Error, cannot update the comment" });
    }
  }

  // DELETE METHOD
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const deleteUser = await Comment.findByIdAndDelete(id);
      return res
        .status(HTTP_CODES.OK)
        .json({
          ok: true,
          message: "Comment deleted successfully",
          deletedId: `${id}`,
          response: deleteUser,
        });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({ ok: false, errorMessage: "Error, cannot delete the comment" });
    }
  }

  return res
    .status(HTTP_CODES.NOT_ALLOWED)
    .json({ ok: false, errorMessage: "Error, Method not allowed" });
}
