import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./providers"
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "KlikPlay - Next Generation Video Streaming",
    description: "Advanced video streaming with seamless movie, TV show, and anime embedding. Your ultimate destination for customizable players.",
    }

    export default function RootLayout({
      children,
      }: Readonly<{
        children: React.ReactNode
        }>) {
          return (
              <html lang="en" suppressHydrationWarning>
                    <body
                            className={cn(
                                      "min-h-screen bg-background font-sans antialiased",
                                                inter.variable
                                                        )}
                                                              >
                                                                      <ThemeProvider
                                                                                attribute="class"
                                                                                          defaultTheme="system"
                                                                                                    enableSystem
                                                                                                              disableTransitionOnChange
                                                                                                                      >
                                                                                                                                <div className="relative flex min-h-screen flex-col">
                                                                                                                                            <Header />
                                                                                                                                                        <main className="flex-1 pt-16">
                                                                                                                                                                        {children}
                                                                                                                                                                                    </main>
                                                                                                                                                                                                <Footer />
                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                  </ThemeProvider>
                                                                                                                                                                                                                        </body>
                                                                                                                                                                                                                            </html>
                                                                                                                                                                                                                              )
                                                                                                                                                                                                                              }