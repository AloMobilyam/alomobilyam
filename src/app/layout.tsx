import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { getFAQSchema, getLocalBusinessSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
});

const title = "Alo Mobilya | Mersin Mobilya Tamir ve Montaj";
const description =
  "Mersin'de yerinde mobilya tamiri, mobilya yenileme, dolap kurulumu, menteşe değişimi, ray değişimi ve kapı onarım hizmeti.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Mersin mobilya tamiri",
    "mobilya tamir Mersin",
    "dolap kurulumu Mersin",
    "menteşe değişimi",
    "ray değişimi",
    "mobilya montaj",
    "yerinde mobilya servisi",
    "Alo Mobilya",
    "Erdoğan Kuşçu",
  ],
  authors: [{ name: "Erdoğan Kuşçu" }],
  creator: "Alo Mobilya",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Alo Mobilya",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = getLocalBusinessSchema();
  const faqSchema = getFAQSchema();

  return (
    <html lang="tr" className={`${dmSans.variable} ${lora.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
