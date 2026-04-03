import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    
    const db = client.db("eazyswitch");
    
    const count = await db.collection("energy_consultancy").countDocuments();

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Count Fetch Error:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}