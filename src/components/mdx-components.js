import { Heading, Code, Text } from '@chakra-ui/core'
import CodeBlock from '@components/code-block'

const components = {
  p: (props) => <Text fontSize={['sm', 'md', 'lg']} {...props} />,
  h2: (props) => <Heading fontSize={['lg', 'xl', '2xl']} {...props} />,
  code: CodeBlock,
  inlineCode: (props) => (
    <Code colorScheme="green" fontSize="0.84em" {...props} />
  ),
}

export default components
