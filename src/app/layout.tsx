import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Providers from "~/components/Provider";
import { Toaster } from "~/components/ui/toaster";
import Script from "next/script";

export const metadata: Metadata = {
  title: "anonGPT",
  description:
    "Unlock fast and accurate information retrieval with anonGPT—no more endless searching. Just the essentials delivered instantly, providing you with concise and relevant data at your fingertips. ",
  openGraph: {
    images: ["/header.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "anonGPT",
    description:
      "Unlock fast and accurate information retrieval with anonGPT—no more endless searching. Just the essentials delivered instantly, providing you with concise and relevant data at your fingertips. ",
    images: ["/header.png"],
    creator: "@ronitrajfr",
  },
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <Providers>
        <body>
          {children}
          <Toaster />
        </body>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="10b8ce81-57ca-4a62-ba21-8f146020b50f"
        />
      </Providers>
    </html>
  );
}
