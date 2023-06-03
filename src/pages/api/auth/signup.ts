import bcrypt from "bcrypt";
import { connectDB } from "../../../../util/database";

// 회원가입시에 가입된 회원인지 체크해줘야함

const signupHandler = async (req: any, res: any) => {
  if (req.method == "POST") {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let db = (await connectDB).db("forum");
    req.body.password = hashedPassword;
    await db.collection("user_cred").insertOne(req.body);
    return res.redirect(302, "/canSkills");
  }
};
export default signupHandler;
