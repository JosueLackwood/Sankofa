import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/database/mongoose";

export async function GET() {
  try {
    await connectToDatabase();

    return NextResponse.json({
      success: true,
      message: "MongoDB Connected",
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}
