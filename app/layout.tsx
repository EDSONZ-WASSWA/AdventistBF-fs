import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ABF Funeral Services',
  description: 'Compassionate Care During Your Time of Need',
  icons: {
    icon: '/pictures/logo1.jpg',
    shortcut: '/pictures/logo1.jpg',
    apple: '/pictures/logo1.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}