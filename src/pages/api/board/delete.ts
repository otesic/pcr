import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

const deleteHandler = async (res: any, req: any) => {
  if (res.method == "POST") {
    const delPost = res.body;
    const clinet = await connectDB;
    const db = clinet.db("forum");
    await db.collection("post").deleteOne({ _id: new ObjectId(delPost) });
    return req.redirect(302, "/canSkills/board");
  }
  return req.status(500).json("삭제 오류 발생");
};

export default deleteHandler;
