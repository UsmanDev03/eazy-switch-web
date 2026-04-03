import {
  NextResponse
} from "next/server";
import clientPromise from "@/lib/mongodb";
import {
  sendEmails
} from "@/lib/mailer";
import {
  ObjectId
} from "mongodb";
export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("driving_school");

    const result = await db.collection("leads").insertOne({
      full_name: body.full_name,
      email: body.email,
      mobile_number: body.mobile_number,
      area: body.area,
      preferred_time: body.preferred_time,
      message: body.message,
      submittedAt: new Date(),
    });

    try {
      await sendEmails(body);
    } catch (mailErr) {
      console.error("Email Error but data was saved:", mailErr.message);
    }

    return NextResponse.json({
      message: "Seatbelts on! We've received your request and are heading your way."
    }, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      message: "Server Error"
    }, {
      status: 500
    });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("driving_school");

    const queries = await db.collection("leads").find({}).sort({
      submittedAt: -1
    }).toArray();

    return NextResponse.json(queries, {
      status: 200
    });
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json({
      message: "Failed to fetch queries"
    }, {
      status: 500
    });
  }
}

export async function DELETE(req) {
  try {
    const {
      searchParams
    } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        message: "ID is required"
      }, {
        status: 400
      });
    }

    const client = await clientPromise;
    const db = client.db("driving_school");

    await db.collection("leads").deleteOne({
      _id: new ObjectId(id)
    });

    return NextResponse.json({
      message: "Deleted successfully"
    }, {
      status: 200
    });
  } catch (error) {
    return NextResponse.json({
      message: "Delete Error"
    }, {
      status: 500
    });
  }
}