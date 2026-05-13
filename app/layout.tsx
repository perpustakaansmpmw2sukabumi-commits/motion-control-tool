import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MotionControl } from '@/components/MotionControl'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Motion Control - Premium Animation Tool',
  description: 'Free premium motion control web tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MotionControl>{children}</MotionControl>
      </body>
    </html>
  )
}
