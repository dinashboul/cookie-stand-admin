"use client"
import { Inter } from '@next/font/google'
import Cookie from './component/Cookie'
import Form from './component/Form'
import Login from './component/Login'
import { useContext } from "react";
import { AuthContext } from './contexts/auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens}= useContext(AuthContext);
  return (
    < div class= "bg-gray-100 dark:bg-black">
      {tokens ?<><Cookie/> <Form/></>  : <Login/>}
      
    </div>
  )
}
