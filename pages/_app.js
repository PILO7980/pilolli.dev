import { ChakraProvider } from '@chakra-ui/core'
import theme from '@theme'
import { DefaultSeo } from 'next-seo'
import siteConfig from '@configs/site-config'

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...siteConfig.seo} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
