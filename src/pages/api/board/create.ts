import { connectDB } from "../../../../util/database";

const postHandler = async (res: any, req: any) => {
  if (res.method == "POST") {
    const newPost = res.body;
    if (newPost.title !== "" && newPost.content !== "") {
      const clinet = await connectDB;
      const db = clinet.db("forum");
      await db.collection("post").insertOne(newPost);
      return req.redirect(302, "/canSkills/board");
    }
    return req.status(500).json("제목이나 내용 빼먹음");
  }
};

export default postHandler;
