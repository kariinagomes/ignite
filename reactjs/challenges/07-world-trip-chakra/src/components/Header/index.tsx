import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxWidth={1480}
      h='24'
      mx='auto'
      px='6'
      align='center'
      justify="center"
    >
      <Image src='/images/logo.svg' alt='logo' />
    </Flex>
  );
}
