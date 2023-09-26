import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Meme Wiki FE',
  description: 'Meme Wiki FE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div id="wrap" className="m-0 mx-auto h-full bg-white" style={{
        minWidth: '320px',
        maxWidth: '420px'
      }}>
          <Header/>
          <div className="conatiner p-16">
              {children}
          </div>
      </div>
      </body>
    </html>
  )
}
