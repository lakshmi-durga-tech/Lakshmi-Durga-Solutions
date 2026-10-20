
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const CASHFREE_API_VERSION = "2025-01-01";

export async function POST(request: NextRequest) {
  try {
    const clientId = process.env.CASHFREE_CLIENT_ID;
    const clientSecret = process.env.CASHFREE_CLIENT_SECRET;
    const environment = process.env.CASHFREE_ENV;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    if (!clientId || !clientSecret || !siteUrl) {
      return NextResponse.json(
        { error: "Cashfree environment variables are missing." },
        { status: 500 }
      );
    }

    if (environment !== "SANDBOX" && environment !== "PRODUCTION") {
      return NextResponse.json(
        { error: "CASHFREE_ENV must be SANDBOX or PRODUCTION." },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";
    const amount = Number(body.amount);

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Enter a valid customer name." },
        { status: 400 }
      );
    }

    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json(
        { error: "Enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    if (
      !Number.isFinite(amount) ||
      amount < 1 ||
      amount > 100000
    ) {
      return NextResponse.json(
        { error: "Amount must be between ₹1 and ₹1,00,000." },
        { status: 400 }
      );
    }

    const orderId = `lds_${crypto.randomUUID().replace(/-/g, "")}`;

    const baseUrl =
      environment === "SANDBOX"
        ? "https://sandbox.cashfree.com/pg"
        : "https://api.cashfree.com/pg";

    const response = await fetch(`${baseUrl}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-api-version": CASHFREE_API_VERSION,
        "x-client-id": clientId,
        "x-client-secret": clientSecret,
      },
      body: JSON.stringify({
        order_id: orderId,
        order_amount: Number(amount.toFixed(2)),
        order_currency: "INR",
        customer_details: {
          customer_id: `lds_${crypto
            .randomUUID()
            .replace(/-/g, "")
            .slice(0, 20)}`,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
        },
        order_meta: {
          return_url: `${siteUrl.replace(/\/$/, "")}/payment-demo/return?order_id={order_id}`,
        },
        order_note: "Lakshmi Durga Solutions payment",
      }),
      cache: "no-store",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Cashfree create-order failed:", {
        status: response.status,
        type: data.type,
        code: data.code,
        message: data.message,
      });

      return NextResponse.json(
        { error: "Unable to create payment order. Please try again." },
        { status: 502 }
      );
    }

    if (!data.payment_session_id) {
      return NextResponse.json(
        { error: "Cashfree did not return a payment session." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      orderId: data.order_id,
      paymentSessionId: data.payment_session_id,
      environment,
    });
  } catch (error) {
    console.error("Create-order API error:", error);

    return NextResponse.json(
      { error: "Unexpected server error while creating the order." },
      { status: 500 }
    );
  }
}
