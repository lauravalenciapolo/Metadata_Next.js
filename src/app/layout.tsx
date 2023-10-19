import Head from "next/head"
export const metadata = {
  title: 'Stalak App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body
        style={{ margin: '0%' }}
      >
        {children}
      </body>
    </html>
  )
}