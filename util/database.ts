import { MongoClient } from "mongodb";

export interface global {}
declare global {
  var _mongo: any;
}
const url: any = process.env.MONGODB_KEY;
const options: any = { useNewUrlParser: true };
let connectDB: Promise<any>;
if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
