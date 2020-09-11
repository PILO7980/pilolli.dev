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
          templateColumns={[
            'minmax(0, 1fr)',
            null,
            null,
            '[start] minmax(0, 1fr) [middle] 300px [end]',
            '[start] minmax(0, 1fr) [middle] 450px [end]',
          ]}
          gap={8}
        >
          {children}
        </Grid>
      </Wrapper>
    </>
  )
}

export default DefaultLayout
