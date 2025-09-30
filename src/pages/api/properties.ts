import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/dbconnection";
import { Property } from "@/database/models/properties.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await connectDB();

  try {
    if (req.method === "GET") {
      const Properties = await Property.find().limit(10)
      res.status(200).json(Properties)
    } else {
      throw new Error("Error, cannot get the properties")
    }
  } catch(err:unknown) {
    console.log(err);
    res.status(500).json(err)
  }
}