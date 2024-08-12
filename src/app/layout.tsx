import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Providers from "~/components/Provider";
import { Toaster } from "~/components/ui/toaster";
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
      </Providers>
    </html>
  );
}
