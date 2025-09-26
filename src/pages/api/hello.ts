// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { arrayUsers } from "@/helpers/utils";

type Data = {
  users: typeof arrayUsers;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json({ users: arrayUsers });
}
