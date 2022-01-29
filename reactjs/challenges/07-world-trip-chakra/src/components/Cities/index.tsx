import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { ContinentProps } from '../../types';

export function Cities({ continent }: ContinentProps) {
  return (
    <Box>
      <Text marginTop={['0', '10']} fontSize={['2xl', '4xl']} fontWeight='500'>
        Cidades +100
      </Text>
      <Flex wrap='wrap' justify={['center', 'space-between']}>
        {continent.topCities.map((city) => (
          <Flex
            key={city.name}
            direction='column'
            bgColor='white'
            borderWidth={1}
            borderColor='yellow.550'
            borderRadius='10'
            marginTop='10'
            maxWidth='60'
            h='56'
          >
            <Image src={city.image} alt={city.name} h="40" />
            <Flex justify='space-between' align='center' mx='4'>
              <Box>
                <Text fontSize='xl' fontWeight='600'>
                  {city.name}
                </Text>
                <Text color='gray.500'>{city.country}</Text>
              </Box>
              <Image src={city.flag} alt={city.country} w='10' h='10' />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}
