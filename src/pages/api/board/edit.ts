import { ObjectId } from "mongodb";
import { connectDB } from "../../../../util/database";

const editHandler = async (res: any, req: any) => {
  if (res.method == "POST") {
    const updatePost = res.body;
    if (updatePost.title !== "" && updatePost.content !== "") {
      const clinet = await connectDB;
      const db = clinet.db("forum");

      await db
        .collection("post")
        .updateOne(
          { _id: new ObjectId(updatePost._id) },
          { $set: { title: updatePost.title, content: updatePost.content } }
        );
      return req.redirect(302, "/canSkills/board");
    }
    return req.status(500).json("수정 오류 발생");
  }
};

export default editHandler;
