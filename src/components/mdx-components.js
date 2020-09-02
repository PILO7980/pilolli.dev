import { Heading, Code, chakra, Icon, useColorModeValue } from '@chakra-ui/core'
import theme from '@theme'
import CodeBlock from '@components/code-block'
import { HiOutlineLink } from 'react-icons/hi'

export const P = (props) => (
  <chakra.p
    color={useColorModeValue('gray.700', 'whiteAlpha.700')}
    {...props}
  />
)

export const LinkedHeading = (props) => (
  <chakra.h2
    color={useColorModeValue('gray.800', 'whiteAlpha.800')}
    css={{
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
  >
    <chakra.div pointerEvents="auto" position="relative">
      {props.children}
      {props.id && (
        <chakra.a
          aria-label="anchor"
          fontSize="0.8em"
          color="green.200"
          opacity={0}
          position="absolute"
          top="0"
          left="0"
          transform="translateX(-100%)"
          transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
          href={`#${props.id}`}
          _focus={{ opacity: 1 }}
        >
          <Icon as={HiOutlineLink} />
        </chakra.a>
      )}
    </chakra.div>
  </chakra.h2>
)

export const Blockquote = (props) => (
  <chakra.blockquote
    borderLeftColor={useColorModeValue('green.100', 'green.800')}
    color={useColorModeValue('gray.600', 'whiteAlpha.600')}
    css={{
      p: {
        color: 'inherit',
        fontSize: 'inherit',
      },
    }}
    {...props}
  />
)

export const Anchor = (props) => {
  const underline = useColorModeValue(
    theme.colors.green[100],
    theme.colors.green[800],
  )

  return (
    <chakra.a
      //textDecoration="underline"
      color={useColorModeValue('green.600', 'green.300')}
      backgroundImage={`linear-gradient(transparent 80%, ${underline} 80%, ${underline} 95%, transparent 95%, transparent 100%)`}
      backgroundSize="100% 100%"
      backgroundRepeat="no-repeat"
      transition="background-size 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        backgroundSize: '0% 100%',
        color: useColorModeValue('green.700', 'green.200'),
      }}
      {...props}
    />
  )
}

const Pre = (props) => <chakra.div my={3} {...props} />

const components = {
  p: (props) => <P textStyle={`p`} {...props} />,
  a: (props) => <Anchor {...props} />,
  h1: (props) => <Heading textStyle={`h1`} {...props} />,
  h2: (props) => <LinkedHeading textStyle={`h2`} {...props} />,
  h3: (props) => <LinkedHeading as="h3" textStyle={`h3`} {...props} />,
  h4: (props) => <LinkedHeading as="h4" textStyle={`h4`} {...props} />,
  pre: (props) => <Pre {...props} />,
  code: CodeBlock,
  inlineCode: (props) => (
    <Code colorScheme="green" fontSize="0.84em" {...props} />
  ),
  thematicBreak: (props) => <chakra.hr textStyle={`hr`} {...props} />,
  hr: (props) => <chakra.hr textStyle={`hr`} {...props} />,
  blockquote: (props) => <Blockquote textStyle={`blockquote`} {...props} />,
  em: (props) => <chakra.div as="em" textStyle={`em`} {...props} />,
  strong: (props) => <chakra.div as="strong" textStyle={`strong`} {...props} />,
  ul: (props) => <chakra.ul textStyle={`ul`} {...props} />,
  ol: (props) => <chakra.ol textStyle={`ol`} {...props} />,
  li: (props) => <chakra.li textStyle={`li`} {...props} />,
}

export default components
