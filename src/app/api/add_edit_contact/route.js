import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { v2 as cloudinary } from 'cloudinary';
import { sendEmails } from "@/lib/mailer";
import { ObjectId } from "mongodb"; // Delete ke liye zaroori hai

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// --- 1. GET: Admin Panel ke liye data fetch karna ---
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("eazyswitch");
    
    // Latest leads sab se upar dikhane ke liye sort kiya hai
    const leads = await db.collection("energy_consultancy")
      .find({})
      .sort({ submittedAt: -1 })
      .toArray();

    return NextResponse.json(leads, { status: 200 });
  } catch (error) {
    console.error("GET FETCH ERROR:", error);
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 });
  }
}

// --- 2. POST: Form submit karwane ke liye ---
export async function POST(req) {
  console.log("--- API HIT START ---");
  try {
    const formData = await req.formData();
    const bill_file = formData.get("bill_file");

    let bill_url = null;

    // Cloudinary Upload Logic
    if (bill_file && bill_file.name !== "undefined" && bill_file.size > 0) {
      console.log("Uploading to Cloudinary...");
      const arrayBuffer = await bill_file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      const uploadResponse = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "eazyswitch_bills", resource_type: "auto" },
          (error, result) => {
            if (error) {
              console.error("Cloudinary Error:", error);
              reject(error);
            } else {
              resolve(result);
            }
          }
        );
        stream.end(buffer);
      });
      bill_url = uploadResponse.secure_url;
      console.log("Cloudinary Upload Success:", bill_url);
    }

    const leadData = {
      first_name: formData.get("first_name") || "",
      last_name: formData.get("last_name") || "",
      business_name: formData.get("business_name") || "",
      email: formData.get("email") || "",
      phone_number: formData.get("phone_number") || "",
      service_interested: formData.get("service_interested") || "General",
      message: formData.get("message") || "",
      bill_url: bill_url, 
      status: "pending",
      submittedAt: new Date(),
    };

    const client = await clientPromise;
    const db = client.db("eazyswitch");
    await db.collection("energy_consultancy").insertOne(leadData);
    console.log("MongoDB Success!");

    try {
      console.log("Sending Emails...");
      await sendEmails(leadData);
      console.log("Emails Sent!");
    } catch (mailErr) {
      console.error("Email Error:", mailErr.message);
    }

    return NextResponse.json({ success: true, message: "Lead submitted!" }, { status: 200 });

  } catch (error) {
    console.error("CRITICAL BACKEND ERROR:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// --- 3. DELETE: Admin panel se lead delete karne ke liye ---
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("eazyswitch");
    
    const result = await db.collection("energy_consultancy").deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Lead deleted successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("DELETE ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}