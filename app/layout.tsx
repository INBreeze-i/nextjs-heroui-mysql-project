import type { Metadata } from "next"
import "./globals.css"
import { NextUIProvider } from "@nextui-org/react"
import NavbarComponent from "@/components/Navbar"

export const metadata: Metadata = {
  title: "NextJS HeroUI MySQL Gallery",
  description: "A modern image gallery built with NextJS, TypeScript, HeroUI and MySQL",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <NextUIProvider>
          <main className="min-h-screen flex flex-col">
            <NavbarComponent />
            {children}
          </main>
        </NextUIProvider>
      </body>
    </html>
  )
}