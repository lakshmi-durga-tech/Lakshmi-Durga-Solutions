
"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import AgencyHeader from "@/components/Header copy";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Download,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const LOGO_PATH = "/images/LDS-Logo.jpg";

type PaymentStatus = "idle" | "processing" | "success" | "failed";

function CompanyLogo({ size = "normal" }: { size?: "normal" | "large" }) {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <div
      className={`mx-auto flex items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white ${
        size === "large" ? "h-24 w-24 p-2" : "h-16 w-16 p-1.5"
      }`}
    >
      {!logoFailed ? (
        <img
          src={LOGO_PATH}
          alt="Lakshmi Durga Solutions logo"
          className="h-full w-full object-contain"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span className="text-center text-xs font-extrabold text-[#082a4a]">
          LDS
        </span>
      )}
    </div>
  );
}

function PaymentDemoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const [result, setResult] = useState<PaymentStatus>("idle");
  const [reference, setReference] = useState("");
  const [receiptLoading, setReceiptLoading] = useState(false);
  const [receiptError, setReceiptError] = useState("");

  const sourceValue = searchParams.get("source");

  const source =
    sourceValue === "agency" || sourceValue === "virtual-operator"
      ? sourceValue
      : "default";

  const isAgency = source === "agency";

  const paymentDemoHref =
    source === "default"
      ? "/payment-demo/"
      : `/payment-demo/?source=${source}`;

  const paymentResult = searchParams.get("result");

  const isPaymentResult =
    paymentResult === "success" || paymentResult === "failed";

  useEffect(() => {
    if (!isPaymentResult) {
      setResult("idle");
      setReference("");
      setReceiptError("");
      return;
    }

    setName(searchParams.get("name") || "Demo Customer");
    setEmail(searchParams.get("email") || "");
    setPhone(searchParams.get("phone") || "");
    setAmount(searchParams.get("amount") || "0");

    setReference(`DEMO-${Date.now().toString().slice(-8)}`);
    setReceiptError("");

    if (paymentResult === "failed") {
      setResult("failed");
      return;
    }

    setResult("processing");

    const timer = window.setTimeout(() => {
      setResult("success");
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [searchParams, isPaymentResult, paymentResult]);

  async function handleDemoPayment(
  e: React.FormEvent<HTMLFormElement>
) {
  e.preventDefault();

  const numericAmount = Number(amount);

  if (
    !Number.isFinite(numericAmount) ||
    numericAmount < 1 ||
    numericAmount > 100000
  ) {
    alert("Enter an amount between ₹1 and ₹1,00,000.");
    return;
  }

  setResult("processing");
  setReceiptError("");

  try {
    const orderResponse = await fetch("/api/payments/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        amount: numericAmount,
        source,
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderResponse.ok) {
      throw new Error(orderData.error || "Could not create payment order.");
    }

    const { load } = await import("@cashfreepayments/cashfree-js");

    const cashfree = await load({
      mode:
        process.env.NEXT_PUBLIC_CASHFREE_ENV === "PRODUCTION"
          ? "production"
          : "sandbox",
    });

    if (!cashfree) {
      throw new Error("Cashfree checkout could not be loaded.");
    }

    await cashfree.checkout({
      paymentSessionId: orderData.paymentSessionId,
      redirectTarget: "_self",
    });
  } catch (error) {
    console.error("Cashfree checkout error:", error);
    setResult("idle");
    alert(
      error instanceof Error
        ? error.message
        : "Unable to start payment. Please try again."
    );
  }
}
  async function downloadReceipt() {
    setReceiptLoading(true);
    setReceiptError("");

    try {
      const { jsPDF } = await import("jspdf");
      const pdf = new jsPDF();

      let logoData: string | null = null;
      let logoFormat: "PNG" | "JPEG" = "JPEG";
      let logoWidth = 0;
      let logoHeight = 0;

      try {
        const response = await fetch(LOGO_PATH, {
          cache: "no-cache",
        });

        if (!response.ok) {
          throw new Error(
            `Logo could not be loaded: HTTP ${response.status}`
          );
        }

        const blob = await response.blob();
        logoFormat = blob.type === "image/png" ? "PNG" : "JPEG";

        logoData = await new Promise<string>((resolve, reject) => {
          const objectUrl = URL.createObjectURL(blob);
          const image = new Image();

          image.onload = () => {
            try {
              const canvas = document.createElement("canvas");
              canvas.width = image.naturalWidth;
              canvas.height = image.naturalHeight;

              const context = canvas.getContext("2d");

              if (!context) {
                throw new Error("Could not create image canvas.");
              }

              if (logoFormat === "JPEG") {
                context.fillStyle = "#ffffff";
                context.fillRect(0, 0, canvas.width, canvas.height);
              }

              context.drawImage(image, 0, 0);

              logoWidth = canvas.width;
              logoHeight = canvas.height;

              resolve(
                canvas.toDataURL(
                  logoFormat === "PNG" ? "image/png" : "image/jpeg",
                  0.95
                )
              );
            } catch (error) {
              reject(error);
            } finally {
              URL.revokeObjectURL(objectUrl);
            }
          };

          image.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            reject(new Error("Unable to decode the company logo."));
          };

          image.src = objectUrl;
        });
      } catch (error) {
        console.error("Company logo loading failed:", error);
        logoData = null;
      }

      // PDF header
      pdf.setFillColor(8, 42, 74);
      pdf.rect(0, 0, 210, 49, "F");

      if (logoData && logoWidth > 0 && logoHeight > 0) {
        const maxWidth = 35;
        const maxHeight = 35;

        const scale = Math.min(
          maxWidth / logoWidth,
          maxHeight / logoHeight
        );

        const width = logoWidth * scale;
        const height = logoHeight * scale;

        pdf.addImage(
          logoData,
          logoFormat,
          14,
          7 + (35 - height) / 2,
          width,
          height
        );
      } else {
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(14, 9, 35, 31, 3, 3, "F");

        pdf.setTextColor(8, 42, 74);
        pdf.setFont("helvetica", "bold");
        pdf.setFontSize(12);
        pdf.text("LDS", 31.5, 27, { align: "center" });
      }

      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(16);
      pdf.text("Lakshmi Durga Solutions", 55, 21);

      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(10);
      pdf.text("Payment Demo Receipt", 55, 30);

      pdf.setTextColor(180, 65, 0);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.text("DEMO - NOT A REAL PAYMENT", 15, 62);

      pdf.setDrawColor(219, 227, 237);
      pdf.line(15, 69, 195, 69);

      const rows: [string, string][] = [
        ["Customer", name || "Demo Customer"],
        ["Email", email || "Not provided"],
        ["Mobile", phone || "Not provided"],
        [
          "Demo Amount",
          `INR ${Number(amount || 0).toLocaleString("en-IN")}`,
        ],
        ["Demo Reference", reference || "Demo transaction"],
        ["Status", "SIMULATED SUCCESS"],
        ["Payment Gateway", "Not connected"],
      ];

      let y = 83;

      pdf.setTextColor(60, 70, 80);
      pdf.setFontSize(10);

      for (const [label, value] of rows) {
        pdf.setFont("helvetica", "bold");
        pdf.text(`${label}:`, 15, y);

        pdf.setFont("helvetica", "normal");

        const lines = pdf.splitTextToSize(value, 115);
        pdf.text(lines, 70, y);

        y += Math.max(10, lines.length * 6);
      }

      const boxY = Math.min(y + 7, 245);

      pdf.setFillColor(255, 247, 219);
      pdf.roundedRect(15, boxY, 180, 31, 3, 3, "F");

      pdf.setTextColor(130, 75, 0);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(9);

      pdf.text("No money was charged.", 20, boxY + 9);
      pdf.text("This document is not proof of payment.", 20, boxY + 17);
      pdf.text("Payment gateway is not connected.", 20, boxY + 25);

      pdf.setTextColor(120, 130, 140);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(8);

      pdf.text(
        "Lakshmi Durga Solutions | Demo document only",
        15,
        285
      );

      pdf.save("LDS-Demo-Receipt.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);

      setReceiptError(
        "PDF generate avvaledu. Please try again or check the browser console."
      );
    } finally {
      setReceiptLoading(false);
    }
  }

  const formattedAmount = Number(amount || 0).toLocaleString("en-IN");

  return (
    <>
      {isAgency ? <AgencyHeader /> : <Header />}

      <main className="min-h-screen bg-[#f4f8fc] text-slate-800">
        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          {!isPaymentResult ? (
            <>
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                  PAYMENT PORTAL / CHECKOUT
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#082a4a] sm:text-4xl">
                  Review your payment
                </h1>

                <p className="mt-3 max-w-2xl leading-7 text-slate-500">
                  Confirm your details and payment amount before proceeding.
                </p>

                <span className="mt-4 inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-800">
                  DEMO MODE · NO REAL PAYMENT
                </span>
              </div>

              <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <form
                  onSubmit={handleDemoPayment}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
                >
                  <h2 className="text-xl font-bold text-[#082a4a]">
                    Customer information
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Full name
                      </label>

                      <input
                        id="name"
                        name="name"
                        required
                        minLength={2}
                        maxLength={100}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        autoComplete="name"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Email address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        maxLength={254}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Mobile number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        inputMode="numeric"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                        required
                        value={phone}
                        onChange={(e) =>
                          setPhone(
                            e.target.value.replace(/\D/g, "").slice(0, 10)
                          )
                        }
                        placeholder="10-digit mobile number"
                        autoComplete="tel-national"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="amount"
                        className="mb-2 block text-sm font-semibold"
                      >
                        Payment amount (₹)
                      </label>

                      <input
                        id="amount"
                        name="amount"
                        type="number"
                        min="1"
                        max="100000"
                        step="0.01"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0878e8] px-5 py-4 font-semibold text-white shadow-lg shadow-blue-900/10 transition hover:bg-blue-700"
                  >
                    Continue to Demo Payment <ArrowRight size={18} />
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-slate-500">
                    Demo only. No real bank, UPI, card or Cashfree transaction
                    will take place.
                  </p>
                </form>

                <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <CreditCard size={24} />
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-[#082a4a]">
                    Order summary
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Lakshmi Durga Solutions — Payment Preview
                  </p>

                  <div className="my-6 border-t border-dashed border-slate-200" />

                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-500">Payment type</span>
                    <span className="font-semibold">Service payment</span>
                  </div>

                  <div className="my-4 border-t border-slate-100" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold">Total amount</span>
                    <span className="text-2xl font-bold text-[#082a4a]">
                      {amount && Number.isFinite(Number(amount))
                        ? `₹${formattedAmount}`
                        : "—"}
                    </span>
                  </div>

                  <div className="mt-6 rounded-2xl bg-blue-50 p-4">
                    <div className="flex items-start gap-3">
                      <LockKeyhole
                        className="mt-0.5 shrink-0 text-blue-700"
                        size={19}
                      />

                      <div>
                        <p className="text-sm font-semibold text-blue-950">
                          Payment gateway not connected
                        </p>

                        <p className="mt-1 text-xs leading-5 text-blue-800">
                          This preview is for testing the design and form flow.
                          No actual payment can be made here.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-slate-500">
                    <ShieldCheck className="mr-1 inline" size={16} />
                    Real payment integration can be added after the payment
                    method is confirmed.
                  </p>
                </aside>
              </div>
            </>
          ) : result === "processing" ? (
            <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white px-8 py-12 text-center shadow-sm">
              <CompanyLogo size="large" />

              <div className="mx-auto mt-8 h-14 w-14 animate-spin rounded-full border-4 border-blue-100 border-t-[#0878e8]" />

              <h2 className="mt-6 text-2xl font-bold text-[#082a4a]">
                Processing demo payment
              </h2>

              <p className="mt-2 text-slate-500">
                Please wait while we prepare the simulated result...
              </p>

              <p className="mt-5 text-xs font-bold text-amber-700">
                DEMO ONLY — NO MONEY IS BEING TRANSFERRED
              </p>
            </div>
          ) : result === "failed" ? (
            <div className="mx-auto max-w-xl rounded-3xl border border-red-100 bg-white p-8 text-center shadow-sm sm:p-10">
              <CompanyLogo size="large" />

              <div className="mx-auto mt-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-5xl font-bold text-red-600">
                ×
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-red-600">
                Demo transaction result
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#082a4a]">
                Demo payment failed
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                This is a simulated failure for testing only. No transaction
                was attempted.
              </p>

              <button
                type="button"
                onClick={() => router.push(paymentDemoHref)}
                className="mt-6 rounded-xl bg-[#0878e8] px-6 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Try Again
              </button>

              <p className="mt-5 text-xs font-bold text-amber-700">
                DEMO ONLY — NOT PROOF OF PAYMENT
              </p>
            </div>
          ) : result === "success" ? (
            <div className="mx-auto max-w-xl overflow-hidden rounded-3xl border border-green-100 bg-white p-8 text-center shadow-sm sm:p-10">
              <CompanyLogo size="large" />

              <div className="relative mx-auto mt-7 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-ping rounded-full bg-green-100 opacity-70" />

                <div className="relative flex h-20 w-20 animate-[bounce_0.7s_ease-out] items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={58} strokeWidth={1.8} />
                </div>
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
                Demo transaction complete
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#082a4a]">
                Demo payment successful!
              </h2>

              <p className="mt-3 leading-7 text-slate-500">
                This is a simulated success for design testing only. No money
                was charged and no real payment was processed.
              </p>

              <div className="mt-7 rounded-2xl border border-slate-100 bg-slate-50 p-5 text-left">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-500">Demo amount</span>
                  <span className="text-2xl font-bold text-[#082a4a]">
                    ₹{formattedAmount}
                  </span>
                </div>

                <div className="my-4 border-t border-slate-200" />

                <p className="text-xs text-slate-500">Customer</p>
                <p className="mt-1 font-semibold text-slate-800">{name}</p>

                <p className="mt-4 text-xs text-slate-500">Email</p>
                <p className="mt-1 break-words font-semibold text-slate-800">
                  {email || "Not provided"}
                </p>

                <p className="mt-4 text-xs text-slate-500">Demo reference</p>
                <p className="mt-1 break-words font-semibold text-slate-800">
                  {reference}
                </p>

                <div className="mt-5 rounded-xl bg-amber-100 p-3 text-center text-xs font-bold text-amber-800">
                  DEMO — NOT A REAL TRANSACTION
                </div>
              </div>

              <button
                type="button"
                onClick={downloadReceipt}
                disabled={receiptLoading}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0878e8] px-5 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Download size={19} />
                {receiptLoading
                  ? "Generating PDF..."
                  : "Download Demo Receipt (PDF)"}
              </button>

              {receiptError && (
                <p role="alert" className="mt-3 text-sm text-red-600">
                  {receiptError}
                </p>
              )}

              <button
                type="button"
                onClick={() => router.push(paymentDemoHref)}
                className="mt-3 w-full rounded-xl border border-slate-200 px-5 py-3 font-semibold text-[#082a4a] transition hover:bg-slate-50"
              >
                Test Another Payment
              </button>

              <p className="mt-5 text-xs leading-5 text-slate-400">
                This is a demo interface. It does not confirm or record any
                actual payment.
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center">
              Loading payment status...
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default function PaymentDemoPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f4f8fc]">
          <div className="mx-auto max-w-xl px-5 py-20 text-center text-slate-500">
            Loading payment demo...
          </div>
        </main>
      }
    >
      <PaymentDemoContent />
    </Suspense>
  );
}
