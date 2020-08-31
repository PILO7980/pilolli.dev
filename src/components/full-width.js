import { Flex } from '@chakra-ui/core'

const FullWidth = (props) => {
  const { children, ...rest } = props
  return (
    <Flex
      w="100vw"
      position="relative"
      left="50%"
      right="50%"
      marginLeft="-50vw"
      marginRight="-50vw"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default FullWidth
