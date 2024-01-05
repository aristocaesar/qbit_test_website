import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ weight: ['200', '300', '400', '500', '600', '700', '800', '900'] , subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DELES - Minuman ASLI Karya Putra Putri Banyuwangi',
  description: 'DELES merupakan minuman spesial teh tarik dengan teknik penyajian menggunakan bambu yang menjadikan rasa minuman lebih nendang dan angklek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
