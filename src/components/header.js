import {
  useColorMode,
  useColorModeValue,
  IconButton,
  chakra,
  Flex,
  Button,
  Box,
  HStack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/core'
import { HiSun, HiMoon } from 'react-icons/hi'
import Logo from '@components/logo'
import NextLink from 'next/link'
import Wrapper from '@components/wrapper'

const HeaderContent = () => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(HiMoon, HiSun)

  return (
    <Wrapper py={12}>
      <Flex justifyContent="space-between">
        <Box>
          <NextLink href="/" passHref>
            <HStack as="a" spacing={1}>
              <VisuallyHidden>Torna all'homepage</VisuallyHidden>
              <Logo />
              <Text fontSize="2xl" fontWeight="bold" color="gray.500">
                pilolli.dev
              </Text>
            </HStack>
          </NextLink>
        </Box>
        <HStack spacing={1}>
          <NextLink href="/chi-sono" passHref>
            <Button as="a" variant="ghost">
              Chi sono
            </Button>
          </NextLink>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            variant="ghost"
            color="current"
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </HStack>
      </Flex>
    </Wrapper>
  )
}

const Header = (props) => {
  const color = useColorModeValue('gray.800', 'gray.300')

  return (
    <chakra.header color={color} {...props}>
      <HeaderContent />
    </chakra.header>
  )
}
export default Header
