import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eazy_switch");
    
    const adminEmail = "usmanadmin@yopmail.com"; 
    const existingUser = await db.collection("users").findOne({ email: adminEmail });

    if (existingUser) {
      return NextResponse.json({ message: "Admin user already exists in Eazy Switch!" });
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await db.collection("users").insertOne({
      email: adminEmail,
      password: hashedPassword,
      name: "Usman Admin",
      role: "admin",
      createdAt: new Date()
    });

    return NextResponse.json({ message: "Admin user seeded successfully in eazy_switch!" });
  } catch (error) {
    return NextResponse.json({ 
      message: "Error seeding user", 
      error: error.message 
    }, { status: 500 });
  }
}