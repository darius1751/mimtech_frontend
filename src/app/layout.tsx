import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/store/ReduxProvider";

export const metadata: Metadata = {
  title: "Dictionary",
  description: "Use this page for search words in english and know the definition, nouns, verb and other caracteristics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </html>
  );
}
