import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GenHealth',
  description: 'care for whoever whereever whenever',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
