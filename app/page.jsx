"use client"
import { Inter } from '@next/font/google'
import Cookie from './component/Cookie'
import Form from './component/Form'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    < div class= "bg-gray-100 dark:bg-black">
      <Cookie/>
      <Form/>
    </div>
  )
}
