
import { NextResponse } from "next/server";

export async function POST(request) {
    const email = await request.json()
    console.log('data:', email);

    
    return NextResponse.json({email})
}