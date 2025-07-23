import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeamK Trading AI - Intelligence Artificielle pour le Trading Crypto',
  description: 'Application de trading crypto intelligente avec analyse IA en temps réel. Transformez votre investissement grâce à l\'intelligence artificielle.',
  keywords: 'trading, crypto, bitcoin, intelligence artificielle, AI, blockchain',
  authors: [{ name: 'TeamK' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-900 text-white antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20">
          {children}
        </div>
      </body>
    </html>
  )
}