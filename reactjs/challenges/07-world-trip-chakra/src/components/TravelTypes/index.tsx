import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

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
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      w='100%'
      maxWidth={1480}
      h='60'
      mx='auto'
      my='12'
      px={['4', '24']}
      align='center'
      justify={['center', 'space-between']}
      flexWrap='wrap'
    >
      {isWideVersion &&
        types.map(({ label, alt, src }) => (
          <Flex key={alt} direction='column' align='center' w='36'>
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

      {!isWideVersion &&
        types.map(({ label, alt }) => (
          <Text
            key={alt}
            fontSize='lg'
            fontWeight='600'
            color='gray.700'
            minW='36'
            align='center'
          >
            <Image
              src='/images/ellipse.svg'
              alt='ellipse'
              display='inline'
              mr='3'
            />
            {label}
          </Text>
        ))}
    </Flex>
  );
}
