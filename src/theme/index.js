import { extendTheme } from '@chakra-ui/core'
import TextStyles from './styles/textStyles'
import components from './components'

const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    mono: '"Source Code Pro", monospace',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  components: {
    ...components,
  },
  ...TextStyles,
})

export default theme
