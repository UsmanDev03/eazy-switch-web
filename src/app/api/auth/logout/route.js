import {
  NextResponse
} from "next/server";
import {
  cookies
} from "next/headers";

export async function POST() {
  try {
    const cookieStore = await cookies();
    cookieStore.set("isLoggedIn", "", {
      path: "/",
      expires: new Date(0),
    });
    return NextResponse.json({
      message: "Logged out successfully"
    }, {
      status: 200
    });
  } catch (error) {
    console.error("LOGOUT_ERROR:", error);
    return NextResponse.json({
      message: "Logout failed"
    }, {
      status: 500
    });
  }
}