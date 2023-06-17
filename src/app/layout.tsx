import './globals.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata = {
  title: 'Diego Carvalho',
  description: 'Diego Carvalho has a degree in Internet Systems and is passionate about web development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
