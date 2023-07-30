import 'src/styles/globals.css'


export const metadata = {
  title: 'FairfaxDev Portfolio',
  description: 'This space is to show you where I started, to where I am now',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
