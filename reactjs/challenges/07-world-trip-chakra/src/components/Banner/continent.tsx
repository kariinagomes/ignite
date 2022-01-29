import { Flex, Text } from '@chakra-ui/react';

interface BannerContinentProps {
  name: string;
  banner: string;
}

export function BannerContinent({ name, banner }: BannerContinentProps) {
  return (
    <Flex
      w='100%'
      maxWidth={1480}
      h={['60', 'md']}
      mx='auto'
      bgImage={`url(${banner})`}
      bgRepeat='no-repeat'
      bgSize='cover'
      px={['4', '24']}
      py={['10', '16']}
      justify={['center', 'flex-start']}
      align={['center', 'flex-end']}
    >
      <Text color='gray.100' fontSize={['3xl', '5xl']} fontWeight='600'>
        {name}
      </Text>
    </Flex>
  );
}
