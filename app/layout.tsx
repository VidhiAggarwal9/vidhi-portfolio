import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vidhi Aggarwal — AI & Full-Stack Developer",
  description:
    "Portfolio of Vidhi Aggarwal — AI & Data Science student, Full-Stack Developer and Data Analytics Enthusiast from Jaipur.",
  keywords: ["AI", "Data Science", "Full-Stack", "React", "Next.js", "Vidhi Aggarwal"],
  authors: [{ name: "Vidhi Aggarwal" }],
  openGraph: {
    title: "Vidhi Aggarwal — Portfolio",
    description: "Turning data into decisions, ideas into products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}