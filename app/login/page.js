'use client'

import { useState } from 'react'

export default function LoginPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function login() {

    const response = await fetch(
      '/api/login',
      {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        })
      }
    )

    const result = await response.json()

    if (result.success) {
      alert('Login berhasil')
      window.location.href = '/'
    } else {
      alert('Login gagal')
    }
  }

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-100
    ">

      <div className="
        bg-white
        p-8
        rounded-2xl
        shadow-xl
        w-[350px]
      ">

        <h1 className="
          text-3xl
          font-bold
          text-center
          text-blue-700
        ">
          Login
        </h1>

        <input
          className="
            w-full
            border
            p-3
            mt-5
            rounded-lg
          "
          placeholder="Email"
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="
            w-full
            border
            p-3
            mt-3
            rounded-lg
          "
          placeholder="Password"
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={login}
          className="
            w-full
            bg-blue-600
            text-white
            p-3
            mt-5
            rounded-lg
          "
        >
          Login
        </button>

      </div>

    </div>

  )
}
