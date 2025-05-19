import type { Metadata } from "next";
import { JSX } from "react";
import localFont from "next/font/local";

import cn from "@/utils/cn";
import Providers from "./providers";
import Layout from "@/components/Layout";
import "../utils/theme/theme.css";
import {Analytics} from "@vercel/analytics/vue";

const font = localFont({
  src: [
    {
      path: "../../public/fonts/inter.var.latin.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter.var.latin.italic.woff2",
      style: "italic",
    },
  ],
  weight: "100 900",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+00??, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+feff, U+fffd",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    absolute: "Mutlu Kasap – Frontend Developer",
    template: "Mutlu Kasap – %s",
  },
  description: "I'm a Frontend Developer based in Istanbul.",
  metadataBase: new URL("https://mutlukasap.dev"),
  openGraph: {
    type: "website",
    locale: "en-US",
    siteName: "Mutlu Kasap",
    url: "https://mutlukasap.dev",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mutluksap",
  },
};

export default function RootLayout({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) {
  return (
    <html suppressHydrationWarning lang="en">
    <head>
      <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon/icon.png" sizes="any" />
      <link rel="apple-touch-icon" href="/favicon/apple-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </head>
    <Analytics />
      <body
        className={cn(
          "bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200",
          font.className,
        )}
      >
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
