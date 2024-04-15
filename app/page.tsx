"use client";

import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import Button from '@mui/material/Button';

export default function Home() {

  const { data: session, status } = useSession();
  // console.log(session)
  // console.log(status)
  return (
    <div>Hello world | 
      <Button variant="contained" onClick={() => signIn("google")}>Login</Button>
      <Button variant="contained" onClick={() => signOut()}>Logout</Button>
      <div className="text-3xl font-bold underline">
        ClientComponent {status}{' '}
        {status === 'authenticated' && session.user?.name}
      </div>
    </div>
  )
}