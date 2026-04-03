import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { sendEmails } from "@/lib/mailer";
import { ObjectId } from "mongodb";

// --- POST: User query submit karne ke liye (Website Form) ---
export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db("eazyswitch"); 

    // Data structure for Leads
    const leadData = {
      first_name: body.first_name,
      last_name: body.last_name,
      business_name: body.business_name,
      email: body.email,
      phone_number: body.phone_number,
      service_interested: body.service_interested,
      message: body.message,
      bill_url: body.bill_url || null,
      status: "pending",
      submittedAt: new Date(),
    };

    const result = await db.collection("energy_consultancy").insertOne(leadData);

    // Email notification logic
    try {
      await sendEmails(body);
    } catch (mailErr) {
      console.error("Email notification failed:", mailErr.message);
    }

    return NextResponse.json({ 
      message: "Success! We've received your request and will get back to you soon." 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

// --- GET: Dashboard Queries fetch karne ke liye (Admin Table) ---
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eazyswitch");

    const queries = await db.collection("energy_consultancy").find({}).sort({
      submittedAt: -1
    }).toArray();

    return NextResponse.json(queries, { status: 200 });
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json({ message: "Failed to fetch queries" }, { status: 500 });
  }
}

// --- DELETE: Inquiry delete karne ke liye (Admin Action) ---
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("eazyswitch");

    await db.collection("energy_consultancy").deleteOne({
      _id: new ObjectId(id)
    });

    return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json({ message: "Delete Error" }, { status: 500 });
  }
}