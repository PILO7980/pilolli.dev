import NextDocument, { Head, Main, NextScript } from 'next/document'
import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from '@chakra-ui/core'

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="it">
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
        <Head></Head>
        <body>
          <ColorModeScript defaultMode="system" />
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
