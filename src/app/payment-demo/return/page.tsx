"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import AgencyHeader from "@/components/Header copy";
import {
  CheckCircle2,
  Download,
  LoaderCircle,
  XCircle,
  ShieldCheck,
} from "lucide-react";

const LOGO_PATH = "/images/LDS-Logo.jpg";

type PaymentState = "loading" | "success" | "failed" | "pending";

type VerifiedPayment = {
  verified?: boolean;
  status?: string;
  orderId?: string;
  amount?: number | string;
  currency?: string;
  customerName?: string;
  customerEmail?: string;
  error?: string;
};

function ReturnContent() {
  const router = useRouter();
  const params = useSearchParams();

  const orderId = params.get("order_id") || "";
  const source = params.get("source");
  const isAgency = source === "agency";

  const [status, setStatus] = useState<PaymentState>("loading");
  const [payment, setPayment] = useState<VerifiedPayment | null>(null);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function verifyPayment() {
      if (!orderId) {
        setError("Payment order ID missing.");
        setStatus("failed");
        return;
      }

      try {
        const response = await fetch("/api/payments/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId }),
          cache: "no-store",
        });

        const data: VerifiedPayment = await response.json();

        if (cancelled) return;

        if (!response.ok) {
          throw new Error(data.error || "Unable to verify payment.");
        }

        setPayment(data);

        if (data.verified === true) {
          setStatus("success");
        } else if (
          ["FAILED", "CANCELLED", "EXPIRED"].includes(
            (data.status || "").toUpperCase()
          )
        ) {
          setStatus("failed");
        } else {
          setStatus("pending");
        }
      } catch (err) {
        if (cancelled) return;
        setError(
          err instanceof Error
            ? err.message
            : "Payment status could not be verified."
        );
        setStatus("pending");
      }
    }

    verifyPayment();

    return () => {
      cancelled = true;
    };
  }, [orderId]);

  async function downloadReceipt() {
    if (status !== "success" || !payment?.verified) return;

    setDownloading(true);
    setError("");

    try {
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF();

      pdf.setFillColor(8, 42, 74);
      pdf.rect(0, 0, 210, 48, "F");

      try {
        const response = await fetch(LOGO_PATH);
        if (response.ok) {
          const blob = await response.blob();
          const dataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(String(reader.result));
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });

          pdf.addImage(dataUrl, "JPEG", 14, 8, 30, 30);
        }
      } catch (logoError) {
        console.warn("Logo unavailable for receipt.", logoError);
      }

      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      pdf.text("Lakshmi Durga Solutions", 52, 20);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text("Payment Receipt", 52, 29);

      pdf.setTextColor(22, 140, 80);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.text("PAYMENT VERIFIED", 15, 62);

      pdf.setDrawColor(219, 227, 237);
      pdf.line(15, 69, 195, 69);

      const amount = Number(payment.amount);

      const rows: [string, string][] = [
        ["Order ID", payment.orderId || orderId],
        ["Customer", payment.customerName || "Customer"],
        ["Email", payment.customerEmail || "Not provided"],
        [
          "Amount",
          `${payment.currency || "INR"} ${
            Number.isFinite(amount)
              ? amount.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : String(payment.amount ?? "")
          }`,
        ],
        ["Status", "PAID"],
        ["Payment gateway", "Cashfree Payments"],
        ["Receipt generated", new Date().toLocaleString("en-IN")],
      ];

      let y = 83;
      pdf.setTextColor(55, 65, 81);
      pdf.setFontSize(10);

      for (const [label, value] of rows) {
        pdf.setFont("helvetica", "bold");
        pdf.text(`${label}:`, 15, y);

        pdf.setFont("helvetica", "normal");
        const lines = pdf.splitTextToSize(value, 120);
        pdf.text(lines, 65, y);

        y += Math.max(10, lines.length * 6);
      }

      pdf.setFillColor(236, 253, 245);
      pdf.roundedRect(15, y + 5, 180, 22, 3, 3, "F");
      pdf.setTextColor(6, 95, 70);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);
      pdf.text("Payment status verified by the merchant server.", 20, y + 18);

      pdf.setTextColor(120, 130, 140);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);
      pdf.text("Lakshmi Durga Solutions", 15, 285);

      pdf.save(`LDS-Receipt-${orderId}.pdf`);
    } catch (err) {
      console.error("Receipt generation failed:", err);
      setError("Receipt PDF generate avvaledu. Please try again.");
    } finally {
      setDownloading(false);
    }
  }

  const amountNumber = Number(payment?.amount);
  const formattedAmount = Number.isFinite(amountNumber)
    ? amountNumber.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
    : "—";

  const retryHref = source
    ? `/payment-demo/?source=${encodeURIComponent(source)}`
    : "/payment-demo/";

  return (
    <>
      {isAgency ? <AgencyHeader /> : <Header />}

      <main className="min-h-screen bg-[#f4f8fc] px-5 py-12 text-slate-800 sm:py-16">
        <section className="mx-auto max-w-xl">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2">
              <img
                src={LOGO_PATH}
                alt="Lakshmi Durga Solutions"
                className="h-full w-full object-contain"
              />
            </div>

            {status === "loading" && (
              <>
                <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-[#0878e8]">
                  <LoaderCircle size={46} className="animate-spin" />
                </div>
                <h1 className="mt-6 text-2xl font-bold text-[#082a4a]">
                  Verifying your payment
                </h1>
                <p className="mt-3 leading-7 text-slate-500">
                  Please wait while we confirm the transaction securely.
                </p>
              </>
            )}

            {status === "success" && (
              <>
                <div className="relative mx-auto mt-8 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-70" />
                  <div className="relative flex h-20 w-20 animate-[bounce_0.7s_ease-out] items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={58} strokeWidth={1.8} />
                  </div>
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                  Payment confirmed
                </p>
                <h1 className="mt-2 text-3xl font-bold text-[#082a4a]">
                  Payment Successful!
                </h1>
                <p className="mt-3 leading-7 text-slate-500">
                  Your payment has been verified successfully. You can download
                  your receipt below.
                </p>

                <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-left">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-500">Amount paid</span>
                    <span className="text-2xl font-bold text-[#082a4a]">
                      ₹{formattedAmount}
                    </span>
                  </div>

                  <div className="my-4 border-t border-slate-200" />

                  <p className="text-xs text-slate-500">Customer</p>
                  <p className="mt-1 break-words font-semibold">
                    {payment?.customerName || "Customer"}
                  </p>

                  <p className="mt-4 text-xs text-slate-500">Email</p>
                  <p className="mt-1 break-words font-semibold">
                    {payment?.customerEmail || "Not provided"}
                  </p>

                  <p className="mt-4 text-xs text-slate-500">Order reference</p>
                  <p className="mt-1 break-all font-semibold">
                    {payment?.orderId || orderId}
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-green-100 p-3 text-xs font-bold text-green-800">
                    <ShieldCheck size={17} />
                    VERIFIED PAYMENT
                  </div>
                </div>

                <button
                  type="button"
                  onClick={downloadReceipt}
                  disabled={downloading}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0878e8] px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
                >
                  <Download size={19} />
                  {downloading ? "Generating receipt..." : "Download Receipt (PDF)"}
                </button>
              </>
            )}

            {status === "failed" && (
              <>
                <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <XCircle size={54} />
                </div>
                <h1 className="mt-6 text-3xl font-bold text-[#082a4a]">
                  Payment Failed
                </h1>
                <p className="mt-3 leading-7 text-slate-500">
                  The transaction was not confirmed as paid. Please check your
                  Cashfree transaction status before trying again.
                </p>
              </>
            )}

            {status === "pending" && (
              <>
                <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-amber-600">
                  <LoaderCircle size={48} />
                </div>
                <h1 className="mt-6 text-2xl font-bold text-[#082a4a]">
                  Payment Status Pending
                </h1>
                <p className="mt-3 leading-7 text-slate-500">
                  We could not confirm the final status yet. Do not pay again
                  until you check the transaction in Cashfree.
                </p>
              </>
            )}

            {error && (
              <p role="alert" className="mt-4 break-words text-sm text-red-600">
                {error}
              </p>
            )}

            {(status === "failed" || status === "pending") && (
              <button
                type="button"
                onClick={() => router.push(retryHref)}
                className="mt-6 w-full rounded-xl bg-[#0878e8] px-5 py-4 font-semibold text-white hover:bg-blue-700"
              >
                Return to Payment Page
              </button>
            )}

            <p className="mt-6 break-all text-xs text-slate-400">
              Order ID: {orderId || "Not available"}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default function PaymentReturnPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f4f8fc] px-5 py-20 text-center text-slate-500">
          Loading payment status...
        </main>
      }
    >
      <ReturnContent />
    </Suspense>
  );
}