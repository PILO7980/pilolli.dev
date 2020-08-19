import { Box, Flex, Text } from 'rebass';

const Logo = () => (
  <Flex
    sx={{
      position: 'absolute',
      top: 2,
      left: 2,
    }}
    px={4}
    py={3}
    alignItems="center"
  >
    <Box
      sx={{
        background: '#00c3ff' /* fallback for old browsers */,
        background:
          '-webkit-linear-gradient(to top, #9dff1c, #00c3ff)' /* Chrome 10-25, Safari 5.1-6 */,
        background:
          'linear-gradient(to top, #9dff1c, #00c3ff)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        transform: 'skew(-30deg)',
      }}
      width={12}
      height={24}
    ></Box>
    <Text as="h1" fontSize={4} ml={2}>
      ANTONIO PILOLLI
    </Text>
  </Flex>
);

export default Logo;
