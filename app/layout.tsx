import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InviteStudio",
  description: "Digital invitation management studio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
