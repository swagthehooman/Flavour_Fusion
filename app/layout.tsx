import './globals.css'
import type { Metadata } from 'next'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Flavor Fusion',
  description: 'Created with love by Swagnik❤️',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <img className='fixed left-0 top-0 h-full w-full -z-10' src='/images/marble.jpeg' alt='background'/>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
