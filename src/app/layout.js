import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh = Kumbh_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Mokx App',
  description: 'Mokx App UI',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={kumbh.className}>
        {children}
      </body>
    </html>
  )
}
