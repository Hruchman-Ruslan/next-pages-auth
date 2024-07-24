import { MongoClient } from "mongodb";

const MONGO_URL = process.env.MONGO_URL as string;

export async function connectedToDatabase() {
  const client = await MongoClient.connect(MONGO_URL);

  return client;
}
