import type { ReactNode } from "react";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import "./globals.css";

export const metadata = {
  title: "NoteHub",
  description: "Manage your notes efficiently",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
