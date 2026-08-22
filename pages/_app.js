import { Fraunces, Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  axes: ['SOFT', 'WONK'],
  variable: '--font-fraunces',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${fraunces.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
