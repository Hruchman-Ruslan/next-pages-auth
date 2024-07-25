import { NextApiRequest, NextApiResponse } from "next";

import { connectedToDatabase } from "@/lib/db";
import { hashPassword } from "@/lib/auth";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { email, password } = data;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - password should also be a least 7 characters long.",
    });
    return;
  }

  const client = await connectedToDatabase();

  const db = client.db();

  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    res.status(422).json({ message: "User exist already!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
  client.close();
}

export default handler;
