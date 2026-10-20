
import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import bcrypt from "bcryptjs";
import { createAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const COOKIE_NAME = "lds_admin_session";
const SESSION_DURATION = 60 * 60 * 8; // 8 hours

export async function POST(request: NextRequest) {
  try {
    const secret = process.env.ADMIN_SESSION_SECRET;

    if (!secret || secret.length < 32) {
      return NextResponse.json(
        { error: "Server session configuration is missing." },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => null);
    const email =
      typeof body?.email === "string"
        ? body.email.trim().toLowerCase()
        : "";
    const password =
      typeof body?.password === "string" ? body.password : "";

    if (!email || !password || email.length > 254 || password.length > 1024) {
      return NextResponse.json(
        { error: "Enter a valid email and password." },
        { status: 400 }
      );
    }

    const supabase = createAdminClient();

    const { data: admin, error } = await supabase
      .from("admin_users")
      .select("id, email, password_hash")
      .eq("email", email)
      .maybeSingle();

    if (error) {
      console.error("Admin lookup failed:", error.message);

      return NextResponse.json(
        { error: "Unable to verify login. Please try again." },
        { status: 500 }
      );
    }

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.password_hash
    );

    if (!passwordMatches) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const token = await new SignJWT({
      email: admin.email,
      role: "admin",
    })
      .setProtectedHeader({ alg: "HS256" })
      .setSubject(admin.id)
      .setIssuedAt()
      .setExpirationTime(`${SESSION_DURATION}s`)
      .sign(new TextEncoder().encode(secret));

    const response = NextResponse.json({
      success: true,
      message: "Login successful.",
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: SESSION_DURATION,
    });

    await supabase
      .from("admin_users")
      .update({ last_login: new Date().toISOString() })
      .eq("id", admin.id);

    return response;
  } catch (error) {
    console.error("Admin login failed:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
