import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json(
    { message: `Hello from ${Date.now().toString()}` },
    { status: 200 },
  );
}
