import SEO from '@components/SEO'
import DefaultLayout from '@components/default-layout'
import { Heading, Text } from '@chakra-ui/core'

export default function Index() {
  return (
    <DefaultLayout>
      <SEO
        title="Chi sono"
        description="Il sito di Antonio Pilolli, front-end developer e web designer"
      />
      <Heading as="h1">Chi sono</Heading>
      <Text>Bla bla 🤕</Text>
    </DefaultLayout>
  )
}
