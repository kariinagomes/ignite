import { Flex, Image, Text } from '@chakra-ui/react';

const types = [
  {
    label: 'vida noturna',
    alt: 'cocktail',
    src: '/images/cocktail.svg',
  },
  {
    label: 'praia',
    alt: 'surf',
    src: '/images/surf.svg',
  },
  {
    label: 'moderno',
    alt: 'building',
    src: '/images/building.svg',
  },
  {
    label: 'clássico',
    alt: 'museum',
    src: '/images/museum.svg',
  },
  {
    label: 'e mais...',
    alt: 'earth',
    src: '/images/earth.svg',
  },
];

export function TravelTypes() {
  return (
    <Flex
      w='100%'
      maxWidth={1480}
      h='40'
      my='12'
      px='24'
      align='center'
      justify='space-between'
    >
      {types.map(({ label, alt, src }) => (
        <Flex direction='column' align='center' w="36">
          <Image src={src} alt={alt} />
          <Text
            fontSize={['lg', 'xl']}
            fontWeight='600'
            color='gray.700'
            mt='6'
          >
            {label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
