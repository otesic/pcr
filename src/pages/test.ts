// "use client";
import { connectDB } from "../../util/database";
const handler = async (res: any, req: any) => {
  const clinet = await connectDB;
  const db = clinet.db("forum");
  let result = await db.collection("post").find().toArray();
  if (res.method == "POST") {
    return req.status(200).json("POST 안녕");
  } else {
    return req.status(200).json(result);
  }
};

export default handler;
