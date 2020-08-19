import { Flex, Text } from 'rebass';
import Wrapper from '@components/Wrapper';
import Logo from '@components/Logo';

export default function Index() {
  return (
    <Wrapper>
      <Flex
        sx={{
          position: 'relative',
        }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        bg="background"
        color="text"
      >
        <Logo />
        <Text fontSize={[5, 6, 7]} p={3}>
          👋 Ciao,
        </Text>
        <Text fontSize={[4, 5, 6]}>ci vediamo presto!</Text>
      </Flex>
    </Wrapper>
  );
}
