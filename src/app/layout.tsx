import './globals.css';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  metadataBase: new URL("https://lakshmidurgasolutions.com"),

  title: {
    default:
      "Computer & Digital Support Services in Vijayawada | Lakshmi Durga Solutions",
    template: "%s | Lakshmi Durga Solutions",
  },

  description:
    "Professional virtual computer operator, DTP, graphic design, data entry, MIS reports, presentations and digital support services for institutions and businesses in Vijayawada, Andhra Pradesh.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Lakshmi Durga Solutions | Computer & Digital Support Services",
    description:
      "Reliable computer, DTP, data entry, design and digital support services for institutions and businesses.",
    url: "https://lakshmidurgasolutions.com/",
    siteName: "Lakshmi Durga Solutions",
    locale: "en_IN",
    type: "website",
    images: ["/images/LDS-Logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
