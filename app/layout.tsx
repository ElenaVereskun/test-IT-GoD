import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
/* import './globals.css' */
import './page.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }} >
          {children}
        </div>
      </body>
    </html>
  )
}