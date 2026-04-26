import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://demo-phi-one-44.vercel.app"),
  title: "Premier Demolition | Asbestos Removal & Demo — South West WA",
  description:
    "Fully licensed demolition & asbestos removal across the South West of WA. Family-owned, 25+ years on the tools. Lic. WR 2489. Free quotes — call 0439 510 783.",
  keywords: [
    "demolition South West WA",
    "asbestos removal Bunbury",
    "house demolition Busselton",
    "Brunswick Junction demolition",
    "Margaret River demolition",
    "licensed asbestos removal",
    "internal strip out",
    "site clean up WA",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Premier Demolition — Asbestos Removal & Demolition · South West WA",
    description:
      "Fully licensed demolition & asbestos removal across the South West of WA. Family-owned, 25+ years on the tools. Lic. WR 2489.",
    url: "/",
    siteName: "Premier Demolition",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premier Demolition — South West WA",
    description:
      "Fully licensed demolition & asbestos removal across the South West of WA. 25+ years on the tools. Lic. WR 2489.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
};

export const viewport = {
  themeColor: "#54B938",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind Play CDN */}
        <script src="https://cdn.tailwindcss.com" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      brand: '#54B938',
                      'brand-deep': '#3F8E29',
                      'brand-dark': '#2A6B1B',
                      ink: '#0A0A09',
                      charcoal: '#383835',
                      cream: '#F4F1EA',
                      off: '#FBFCFB',
                      hazard: '#F5CF2B',
                    },
                    fontFamily: {
                      display: ['Anton', 'Impact', 'Arial Black', 'sans-serif'],
                      body: ['"DM Sans"', 'system-ui', 'sans-serif'],
                      mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
                    },
                    letterSpacing: {
                      'wider2': '0.18em',
                      'wider3': '0.32em',
                    },
                  },
                },
              };
            `,
          }}
        />
      </head>
      <body className="font-body bg-off text-ink">{children}</body>
    </html>
  );
}
