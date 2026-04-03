import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("driving_school");
    const existingUser = await db.collection("users").findOne({ email: "usmanadmin@yopmail.com" });

    if (existingUser) {
      return NextResponse.json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await db.collection("users").insertOne({
      email: "usmanadmin@yopmail.com",
      password: hashedPassword,
      name: "Usman Admin",
      role: "admin",
      createdAt: new Date()
    });

    return NextResponse.json({ message: "Admin user seeded successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "Error seeding user", error: error.message }, { status: 500 });
  }
}