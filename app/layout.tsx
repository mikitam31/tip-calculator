import './globals.css'
import { Space_Mono } from 'next/font/google'

const mono = Space_Mono({
  subsets: [ 'latin' ],
  weight: [ '700' ],
  variable: '--font-mono'
})

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
      <body className={ mono.className }>
        { children }
      </body>
    </html>
  )
}
