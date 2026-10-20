
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("lds_admin_session")?.value;
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!token || !secret || secret.length < 32) {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(secret),
      { algorithms: ["HS256"] }
    );

    if (
      payload.role !== "admin" ||
      typeof payload.sub !== "string" ||
      typeof payload.email !== "string"
    ) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      email: payload.email,
    });
  } catch {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}
