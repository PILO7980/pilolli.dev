import SEO from '@components/SEO'
import Header from '@components/header'
import { Grid } from '@chakra-ui/core'
import Wrapper from '@components/wrapper'

const DefaultLayout = ({ props, children }) => {
  return (
    <>
      <SEO {...props}></SEO>
      <Header />
      <Wrapper>
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
      </Wrapper>
    </>
  )
}

export default DefaultLayout
