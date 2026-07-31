import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Softglow Threshold — A Quiet Liminal Romantasy",
  description:
    "She walked through a door that was never meant to open. A quiet, sensory liminal romantasy about residual magic, slow-burn intimacy, and choosing connection under ongoing pressure. Book One of the Softglow sequence.",
  openGraph: {
    title: "Softglow Threshold",
    description: "A Quiet Liminal Romantasy by R. Snodgrass III",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-softglow-void text-softglow-paper antialiased">
        {children}
      </body>
    </html>
  );
}
