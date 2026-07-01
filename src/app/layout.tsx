import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import Script from "next/script";
import { MotionProvider } from "@/components/MotionProvider";
import { getFAQSchema, getLocalBusinessSchema } from "@/lib/schema";
import { HOME_OG_IMAGE, SITE_URL } from "@/lib/site";
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
  "40 yılı aşkın tecrübeli, ustalık belgeli mobilya ustası Erdoğan Kuşçu ile Mersin'de yerinde mobilya tamiri, yenileme, dolap kurulumu, menteşe ve ray değişimi hizmeti.";

const GA_MEASUREMENT_ID = "G-RJEH032FK4";
const isProduction = process.env.NODE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "Mersin mobilya tamiri",
    "mobilya tamir Mersin",
    "yerinde mobilya tamiri Mersin",
    "ustalık belgeli mobilya ustası",
    "40 yıllık mobilya ustası",
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
    images: [
      {
        url: HOME_OG_IMAGE.url,
        alt: HOME_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [HOME_OG_IMAGE.url],
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
        {isProduction && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
