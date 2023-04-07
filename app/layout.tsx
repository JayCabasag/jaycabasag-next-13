import Homepage from '@/containers/home'
import './globals.css'

export const metadata = {
  title: 'Jay Cabasag - Home',
  description: 'Jay cabasag portfolio created using next js 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Homepage>
          {children}
        </Homepage>
      </body>
    </html>
  )
}
