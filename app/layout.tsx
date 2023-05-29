import './globals.css'
import { Space_Mono } from 'next/font/google'
import { Header } from './components';

const inter = Space_Mono({ subsets: ['latin'], weight: ['700'] })

export const metadata = {
  title: 'Tip Calculator',
  description: 'Tip Calculator with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Header />
        { children }
      </body>
    </html>
  )
}
