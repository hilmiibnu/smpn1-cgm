import './globals.css'

export const metadata = {
  title: 'SMPN 1 Cigandamekar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
