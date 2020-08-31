import SEO from '@components/SEO'
import Header from '@components/header'
import { Container } from '@chakra-ui/core'

const DefaultLayout = ({ props, children }) => {
  return (
    <>
      <SEO {...props}></SEO>
      <Header />
      <Container maxW="lg">{children}</Container>
    </>
  )
}

export default DefaultLayout
