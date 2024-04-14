"use client";

import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"


export default function Home() {

  const { data: session, status } = useSession();
  // console.log(session)
  // console.log(status)
  return (
    <div>Hello world | 
      <button onClick={() => signIn("google")}>Sign in with Google</button> |
      <button onClick={() => signOut()}>Sign out with Google</button> |
      <div>
        ClientComponent {status}{' '}
        {status === 'authenticated' && session.user?.name}
      </div>
    </div>
  )
}