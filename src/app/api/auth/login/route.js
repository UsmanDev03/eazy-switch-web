import {
  NextResponse
} from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import {
  cookies
} from "next/headers";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      email,
      password
    } = body;

    const client = await clientPromise;
    const db = client.db("driving_school");

    const user = await db.collection("users").findOne({
      email: email
    });

    if (!user) {
      return NextResponse.json({
        message: "Invalid Email"
      }, {
        status: 401
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({
        message: "Invalid Password"
      }, {
        status: 401
      });
    }

    const cookieStore = await cookies();

    cookieStore.set("isLoggedIn", "true", {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400, // 1 day
    });

    cookieStore.set("adminId", user._id.toString(), {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400,
    });

    return NextResponse.json({
      message: "Success"
    }, {
      status: 200
    });

  } catch (error) {
    console.log("FULL_ERROR_LOG:", error);
    return NextResponse.json({
      error: error.message
    }, {
      status: 500
    });
  }
}