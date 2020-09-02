import SEO from '@components/SEO'
import Header from '@components/header'
import { Container, Grid } from '@chakra-ui/core'

const DefaultLayout = ({ props, children }) => {
  return (
    <>
      <SEO {...props}></SEO>
      <Header />
      <Container maxW="lg" px={[8]}>
        <Grid
          templateColumns={
            ('minmax(0, 1fr)',
            null,
            null,
            '[start] minmax(0, 1fr) [middle] 200px [end]')
          }
          gap={3}
        >
          {children}
        </Grid>
      </Container>
    </>
  )
}

export default DefaultLayout
