import "./globals.css";
import type { Metadata } from "next";
import { roboto_mono } from "@/utils/fonts";


//theme provider used for dark mode swithching
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "Portfollio showcase",
  description: "Created using Typescriptn Next Js and Shadcn UI Library",
};







export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      {/* children goes here which for now is just "Pages being passed down" */}
      <body className={`${roboto_mono.className} `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
