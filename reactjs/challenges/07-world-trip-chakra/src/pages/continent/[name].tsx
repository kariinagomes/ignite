import { Box, Flex, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { continents } from '../../api/continents.json';
import { Header } from '../../components/Header';
import { BannerContinent } from '../../components/Banner/continent';
import { Info } from '../../components/Info';

interface Continent {
  id: number;
  name: string;
  title: string;
  description: string;
  banner: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  numberOfCities: number;
  topCities: {
    name: string;
    image: string;
    country: string;
    flag: string;
  };
}

interface ContinentProps {
  continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />
      <BannerContinent continentName={continent.title} />
      <Flex
        w='100%'
        maxWidth={1480}
        px={['10', '24']}
        py={['10', '16']}
        justify='space-between'
        fontSize={['md', 'xl']}
        flexDirection={['column', 'row']}
        mx='auto'
      >
        <Box w={['100%', '60%']}>
          <Text color='gray.700' textAlign='justify'>
            {continent.description}
          </Text>
        </Box>
        <Flex
          w={['100%', '40%']}
          justify='space-between'
          align='center'
          my={['10', '0']}
          marginLeft={['0', '10']}
        >
          <Info number={continent.numberOfCountries} label='países' />
          <Info number={continent.numberOfLanguages} label='linguas' />
          <Info number={continent.numberOfCities} label='cidades +100' />
        </Flex>
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params;

  const continent = continents.find((continent) => continent.name === name);

  return {
    props: {
      continent,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};
