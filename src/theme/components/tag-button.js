const colorModeTheme = {
  dark: {
    bg: 'transparent',
    color: 'gray.300',
    _checked: {
      borderColor: 'green.600',
      bg: 'green.600',
      color: 'white',
    },
    _hover: {
      bg: 'whiteAlpha.200',
    },
    _active: {
      bg: 'whiteAlpha.300',
    },
  },
  light: {
    bg: 'transparent',
    color: 'gray.500',
    _checked: {
      borderColor: 'green.600',
      bg: 'green.600',
      color: 'white',
    },
    _hover: {
      bg: 'gray.100',
    },
    _active: {
      bg: 'gray.200',
    },
  },
}
const TagButton = {
  baseStyle: ({ colorMode }) => {
    const colorModeStyles =
      colorMode === 'light' ? colorModeTheme.light : colorModeTheme.dark

    return {
      cursor: 'pointer',
      borderRadius: 'md',
      fontSize: 'sm',
      textAlign: 'center',
      px: 1,
      fontWeight: 'semibold',
      borderWidth: '1px',
      _focus: { boxShadow: 'outline' },
      ...colorModeStyles,
    }
  },
}

export default TagButton
