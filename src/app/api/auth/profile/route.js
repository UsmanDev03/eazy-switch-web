import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const adminId = cookieStore.get("adminId")?.value;

    if (!adminId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const client = await clientPromise;
    const db = client.db("eazy_switch");

    const admin = await db.collection("users").findOne(
      { _id: new ObjectId(adminId) },
      { projection: { password: 0 } }
    );

    if (!admin) return NextResponse.json({ message: "Admin not found" }, { status: 404 });

    return NextResponse.json(admin);
  } catch (error) {
    return NextResponse.json({ message: "Error fetching profile", error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    const cookieStore = await cookies();
    const adminId = cookieStore.get("adminId")?.value;

    if (!adminId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const client = await clientPromise;
    const db = client.db("eazy_switch");

    let updateData = { name, email };
    
    if (password && password.trim() !== "") {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const result = await db.collection("users").updateOne(
      { _id: new ObjectId(adminId) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Admin not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Error updating profile", error: error.message }, { status: 500 });
  }
}