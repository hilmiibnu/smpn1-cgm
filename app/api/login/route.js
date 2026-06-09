import { NextResponse } from 'next/server'

export async function POST(req) {

  const body = await req.json()

  const email = body.email
  const password = body.password

  if (
    email === 'admin@gmail.com'
    &&
    password === 'admin123'
  ) {

    return NextResponse.json({
      success: true
    })

  }

  return NextResponse.json({
    success: false
  })

}
