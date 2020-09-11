import SEO from '@components/seo'
import DefaultLayout from '@components/default-layout'
import { useColorModeValue } from '@chakra-ui/core'
import Bleed from '@components/bleed'

export default function Index({ posts }) {
  const bleedBg = useColorModeValue('green.600', 'green.300')
  const bleedText = useColorModeValue('white', 'green.800')

  return (
    <DefaultLayout as="main">
      <SEO
        title="Homepage"
        description="Il sito di Antonio Pilolli, front-end developer e web designer"
      />
      <Bleed py={8} fontSize="3xl" bg={bleedBg} color={bleedText} mb={8}>
        Prova Componente full width
      </Bleed>
    </DefaultLayout>
  )
}
