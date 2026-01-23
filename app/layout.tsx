import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavbarContainer from "@/components/NavbarContainer/NavbarContainer";
import Footer from "@/components/Footer";
import "./globals.css";
import { ReactNode } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Gonzalez",
  description: "My name is David Gonzalez and this is my personal website.",
  keywords:
    "David Gonzalez, Portfolio, Resume, Personal Website, Web Developer",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      {
        url: "/images/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/images/favicon/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/images/favicon/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/images/favicon/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/images/favicon/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/images/favicon/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/images/favicon/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/images/favicon/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/images/favicon/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/images/favicon/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  manifest: "/images/favicon/manifest.json",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />
      </head>
      <body
        style={{ minWidth: "100vw", minHeight: "100%", width: "fit-content" }}
      >
        <NavbarContainer />
        {children}
        <Footer />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
          integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
          crossOrigin="anonymous"
          defer
        ></script>
        <script
          src="https://kit.fontawesome.com/94f1a48899.js"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
