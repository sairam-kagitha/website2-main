import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/themes-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mohana Mantra",
    description:
        "A Techno Cultural Fest Conducted by Students, for Students and of Students in Mohan Babu University.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("", inter.className)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <main className="min-h-screen antialiased flex flex-col relative">
                        <Navbar />
                        <div className="flex-1 flex-grow">{children}</div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
