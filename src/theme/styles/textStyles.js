const TextSytles = {
  textStyles: {
    p: {
      fontSize: ['sm', 'md', 'lg', 'xl'],
      my: '3',
    },
    h1: {
      fontSize: ['2xl', '3xl', '5xl', '6xl'],
      fontWeight: 'extrabold',
      lineHeight: 'shorter',
      letterSpacing: 'tighter',
      mb: '6',
      textAlign: 'start',
    },
    h2: {
      fontSize: ['xl', '2xl', '4xl', '5xl'],
      fontWeight: 'bold',
      lineHeight: 'shorter',
      letterSpacing: 'tight',
      my: '4',
    },
    h3: {
      fontSize: ['lg', 'xl', '2xl', '3xl'],
      fontWeight: 'semibold',
      my: '3',
    },
    h4: {
      fontSize: ['md', 'lg', 'xl', 'lg'],
      fontWeight: 'semibold',
      my: '3',
    },
    hr: {
      borderColor: 'green.300',
      my: '6',
      mx: '20%',
    },
    blockquote: {
      fontSize: ['lg', 'xl', '2xl', '3xl'],
      fontWeight: 'semibold',
      fontStyle: 'italic',
      my: '6',
      mx: '3',
      pl: ['3', null, 6],
      borderLeftWidth: ['0.25rem', null, '0.50rem'],
    },
    em: {
      fontWeight: 'semibold',
      fontStyle: 'italic',
    },
    strong: {
      fontWeight: 'extrabold',
    },
    ul: {
      listStyle: 'none',
      my: '3',
      '& > li': {
        position: 'relative',
        pl: '8',
      },
      '& > li::before': {
        background: 'linear-gradient(to right, #9dff1c, #00c3ff)',
        position: 'absolute',
        content: `""`,
        borderRadius: '0',
        w: '3',
        h: '1',
        left: '2',
        top: '3',
        transform: 'skewX(-20deg)',
        opacity: '0.8',
      },
    },
    ol: {
      listStyle: 'none',
      counterReset: 'list-counter',
      my: '3',
      '& > li': {
        position: 'relative',
        counterIncrement: 'list-counter',
        pl: '8',
      },
      '& > li::before': {
        position: 'absolute',
        content: `counters(list-counter, ".") "."`,
        fontWeight: 'semibold',
        left: '0',
        top: '0',
        color: 'green.500',
      },
    },
    li: {
      fontSize: ['sm', 'md', 'lg', 'xl'],
      my: '3',
    },
  },
}

export default TextSytles
