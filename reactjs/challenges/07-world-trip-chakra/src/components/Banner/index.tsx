import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w='100%'
      maxWidth={1480}
      h={['60', '80']}
      mx='auto'
      bgImage='url(/images/banner-background.svg)'
      bgRepeat='no-repeat'
      px={[ '4', '24']}
      py={['10', '16']}
    >
      <Box w={isWideVersion ? '50%' : '100%'}>
        <Text fontSize={['2xl', '4xl']} color='gray.100'>
          5 Continentes, infinitas possibilidades
        </Text>
        <Text fontSize={['lg', 'xl']} color='gray.300' mt='8'>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Box>
      {isWideVersion && (
        <Box
          w='50%'
          display='flex'
          justifyContent='flex-end'
          alignItems='flex-start'
        >
          <Image src='/images/airplane.svg' alt='logo' />
        </Box>
      )}
    </Flex>
  );
}
