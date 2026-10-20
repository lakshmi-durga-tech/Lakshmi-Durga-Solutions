import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const API_VERSION = "2025-01-01";

export async function POST(request: NextRequest) {
  try {
    const clientId = process.env.CASHFREE_CLIENT_ID;
    const clientSecret = process.env.CASHFREE_CLIENT_SECRET;
    const environment = process.env.CASHFREE_ENV;

    if (
      !clientId ||
      !clientSecret ||
      !["SANDBOX", "PRODUCTION"].includes(environment || "")
    ) {
      return NextResponse.json(
        { error: "Cashfree configuration is incomplete." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const orderId =
      typeof body.orderId === "string" ? body.orderId : "";

    if (!/^lds_[a-f0-9]{32}$/.test(orderId)) {
      return NextResponse.json(
        { error: "Invalid order ID." },
        { status: 400 }
      );
    }

    const baseUrl =
      environment === "SANDBOX"
        ? "https://sandbox.cashfree.com/pg"
        : "https://api.cashfree.com/pg";

    const response = await fetch(
      `${baseUrl}/orders/${encodeURIComponent(orderId)}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "x-api-version": API_VERSION,
          "x-client-id": clientId,
          "x-client-secret": clientSecret,
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Cashfree verification error:", {
        status: response.status,
        code: data.code,
        message: data.message,
      });

      return NextResponse.json(
        { error: "Unable to verify payment with Cashfree." },
        { status: 502 }
      );
    }

    const paid = data.order_status === "PAID";

    return NextResponse.json({
      verified: paid,
      status: data.order_status,
      orderId: data.order_id,
      amount: paid ? data.order_amount : undefined,
      currency: data.order_currency,
      customerName: paid
        ? data.customer_details?.customer_name
        : undefined,
      customerEmail: paid
        ? data.customer_details?.customer_email
        : undefined,
    });
  } catch (error) {
    console.error("Payment verification failed:", error);

    return NextResponse.json(
      { error: "Unexpected error while verifying payment." },
      { status: 500 }
    );
  }
}