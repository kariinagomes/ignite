import { Box, Flex, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex
      w='100%'
      maxWidth={1480}
      h='80'
      mx='auto'
      bgImage='url(/images/banner-background.svg)'
      bgRepeat='no-repeat'
      px='24'
      py='16'
    >
      <Box w='50%'>
        <Text fontSize={['2xl', '4xl']} color='gray.100'>
          5 Continentes, infinitas possibilidades
        </Text>
        <Text fontSize={['lg', 'xl']} color='gray.300' mt='8'>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      <Box
        w='50%'
        display='flex'
        justifyContent='flex-end'
        alignItems='flex-start'
      >
        <Image src='/images/airplane.svg' alt='logo' />
      </Box>
    </Flex>
  );
}
