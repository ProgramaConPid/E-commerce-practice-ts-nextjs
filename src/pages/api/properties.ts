import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "@/lib/dbconnection";
import Property from "@/database/models/properties.model";
import { HTTP_CODES } from "./comments";

type GetProperties = { ok: true; message: string; response: object[] };
type PostProperty = { ok: true; message: string; response: object };
type UpdateProperty = {
  ok: true;
  message: string;
  updatedId: string;
  response: object;
};
type DeleteProperty = {
  ok: true;
  message: string;
  deletedId: string;
  response: object;
};
type ErrorResponse = { ok: false; errorMessage: string };

type ApiResponse =
  | GetProperties
  | PostProperty
  | UpdateProperty
  | DeleteProperty
  | ErrorResponse;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  await connectDB();

  if (req.method === "GET") {
    try {
      const Properties = await Property.find().limit(20);
      return res
        .status(HTTP_CODES.OK)
        .json({
          ok: true,
          message: "Properties obtained successfully",
          response: Properties,
        });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({ ok: false, errorMessage: "Error, cannot get the properties" });
    }
  }

  // POST METHOD
  if (req.method === "POST") {
    try {
      const { name, value, img } = req.body;
      const newProperty = await Property.create({ name, value, img });
      return res.status(HTTP_CODES.CREATED_OK).json({
        ok: true,
        message: "Property created successfully",
        response: newProperty,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({ ok: false, errorMessage: "Error, cannot create the property" });
    }
  }

  // PUT METHOD
  if (req.method === "PUT") {
    try {
      const { id, name, text } = req.body;
      const updateProperty = await Property.findByIdAndUpdate(id, {
        name,
        text,
      });
      return res.status(HTTP_CODES.OK).json({
        ok: true,
        message: "Property updated successfully",
        updatedId: id,
        response: updateProperty,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({
          ok: false,
          errorMessage: "Error, cannot update the propertie",
        });
    }
  }

  // DELETE METHOD
  if (req.method === "DELETE") {
    try {
      const { id } = req.query;
      const deleteProperty = await Property.findByIdAndDelete(id);
      return res.status(HTTP_CODES.OK).json({
        ok: true,
        message: "Property removed successfully",
        deletedId: `${id}`,
        response: deleteProperty,
      });
    } catch (e) {
      console.log(e);
      return res
        .status(HTTP_CODES.SERVER_ERROR)
        .json({ ok: false, errorMessage: "Error, cannot remove the property" });
    }
  }

  return res
    .status(HTTP_CODES.NOT_ALLOWED)
    .json({ ok: false, errorMessage: "Error, Method not allowed" });
}
