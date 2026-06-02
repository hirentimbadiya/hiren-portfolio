import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Hiren Timbadiya — DevOps/SRE Engineer",
  description: "I build platforms that don't wake you up at 2 AM (unless it's a real incident). DevOps/SRE Engineer specializing in AWS, Terraform, Kubernetes, CI/CD & Observability.",
  keywords: ["DevOps", "SRE", "AWS", "Terraform", "Kubernetes", "CI/CD", "Platform Engineer"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
