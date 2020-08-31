import defaultTheme from '@chakra-ui/theme'
import mdx from './mdx'

const theme = {
  ...defaultTheme,
  fonts: {
    ...defaultTheme.fonts,
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
  ...mdx,
}

export default theme
