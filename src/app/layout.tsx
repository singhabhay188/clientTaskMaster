import type { Metadata } from "next";
import "./globals.css";
import ApolloProv from "@/provider/ApolloProvider";

export const metadata: Metadata = {
  title: "TaskMaster",
  description: "Manage all your meetings with ease",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ApolloProv>
          {children}
        </ApolloProv>
      </body>
    </html>
  );
}