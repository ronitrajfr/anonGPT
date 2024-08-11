import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Providers from "~/components/Provider";
import { Toaster } from "~/components/ui/toaster";
export const metadata: Metadata = {
  title: "anonGPT",
  description: "free and open source search engine bot",
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
