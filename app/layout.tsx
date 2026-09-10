import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* =========================================================
   FONTS
   ========================================================= */

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/* =========================================================
   SITE METADATA
   ========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL("https://k-r-o-y.github.io"),

  title: {
    default: "Kanishka Roy | Software Engineer",
    template: "%s | Kanishka Roy",
  },

  description:
    "Portfolio of Kanishka Roy, a software engineer working across high-performance computing, distributed systems, AI and machine learning, scientific computing, and performance engineering.",

  keywords: [
    "Kanishka Roy",
    "Software Engineer",
    "High Performance Computing",
    "HPC",
    "Distributed Systems",
    "Machine Learning",
    "Artificial Intelligence",
    "Scientific Computing",
    "Performance Engineering",
    "Backend Engineering",
    "Data Science",
    "Applied Mathematics",
    "Python",
    "C++",
    "PyTorch",
  ],

  authors: [
    {
      name: "Kanishka Roy",
    },
  ],

  creator: "Kanishka Roy",
  publisher: "Kanishka Roy",

  applicationName: "Kanishka Roy Portfolio",

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",

    title: "Kanishka Roy | Software Engineer",

    description:
      "Software engineer working across high-performance computing, distributed systems, AI and machine learning, scientific computing, and performance engineering.",

    siteName: "Kanishka Roy",

    locale: "en_GB",

    url: "/",
  },

  twitter: {
    card: "summary_large_image",

    title: "Kanishka Roy | Software Engineer",

    description:
      "Software engineer working across high-performance computing, distributed systems, AI and machine learning, scientific computing, and performance engineering.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* =========================================================
   VIEWPORT
   ========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  colorScheme: "dark light",

  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#05070b",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#f4f6fa",
    },
  ],
};

/* =========================================================
   INITIAL THEME SCRIPT
   ========================================================= */

/*
 * This executes before React hydration.
 *
 * Theme priority:
 *
 * 1. Explicit theme saved by the visitor
 * 2. Operating-system preference
 * 3. Dark theme fallback
 *
 * globals.css reads:
 *
 * html[data-theme="dark"]
 * html[data-theme="light"]
 */

const themeScript = `
(function () {
  try {
    var storageKey = "portfolio-theme";
    var savedTheme = localStorage.getItem(storageKey);
    var theme;

    if (savedTheme === "light" || savedTheme === "dark") {
      theme = savedTheme;
    } else {
      theme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();
`;

/* =========================================================
   ROOT LAYOUT
   ========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/*
         * Apply the visitor's theme before the page paints.
         * This greatly reduces light/dark theme flashing.
         */}
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body
        className={`${geist.variable} ${geistMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}