import type { Metadata } from "next";
import { Inter, Smooch_Sans } from "next/font/google";
import { getServerSession } from "next-auth/next";
import "./globals.css";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/utils/theme-provider";

import { ModeToggle } from "@/utils/mode-toggle";
import { Navbar } from "@/components/shared";
import AuthProvider from "@/utils/auth-provider";
import toast, { Toaster } from "react-hot-toast";
import { authOptions } from "@/utils/auth";
import ClientProvider from "@/lib/query-client-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-Inter" });
const smooch = Smooch_Sans({ subsets: ["latin"], variable: "--font-Smooch" });

export const metadata: Metadata = {
  title: "LuxeBite",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  // console.log(session?.user);

  return (
    <html lang="en">
      <body className={cn(inter.variable, smooch.variable, "h-full")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <AuthProvider session={session}>
            <ClientProvider>
              <div>
                <Navbar />
              </div>
              <main className="relative ">
                {children}
                <Toaster />
                <div className="fixed top-1/2">
                  <ModeToggle />
                </div>
              </main>
            </ClientProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
