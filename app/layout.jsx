'use client';
import Footer from './component/Footer'
import './globals.css'
import Header from './component/Header'
import ThemeWrapper from './contexts/Theme'
export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeWrapper>
      <body >
        <Header />
        <main>
        {children}
        </main>    
        <Footer />

        </body>
        </ThemeWrapper>
        
    </html>
  )
}
