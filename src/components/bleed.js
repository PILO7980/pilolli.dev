import { Flex } from '@chakra-ui/core'
import Wrapper from './wrapper'

const Bleed = (props) => {
  const { children, ...rest } = props
  return (
    <Flex
      gridColumn="start / end"
      w="100vw"
      position="relative"
      left="50%"
      right="50%"
      marginLeft="-50vw"
      marginRight="-50vw"
      {...rest}
    >
      <Wrapper>{children}</Wrapper>
    </Flex>
  )
}

export default Bleed
