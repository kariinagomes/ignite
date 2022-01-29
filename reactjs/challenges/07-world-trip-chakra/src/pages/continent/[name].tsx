import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import api from '../../api/continents.json';
import { Header } from '../../components/Header';
import { BannerContinent } from '../../components/Banner/continent';
import { Info } from '../../components/Info';
import { Cities } from '../../components/Cities';
import { ContinentProps } from '../../types';

export default function Continent({ continent }: ContinentProps) {
  console.log('continent: ', continent);
  return (
    <>
      <Header />
      <BannerContinent name={continent.title} banner={continent.banner} />
      <Box
        w='100%'
        maxWidth={1480}
        mx='auto'
        px={['10', '24']}
        py={['10', '16']}
      >
        <Flex
          justify='space-between'
          fontSize={['2md', '2xl']}
          flexDirection={['column', 'row']}
        >
          <Box w={['100%', '60%']}>
            <Text color='gray.700' textAlign='justify'>
              {continent.about}
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
        <Cities continent={continent} />
      </Box>
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

  const continent = api.continents.find((continent) => continent.name === name);

  return {
    props: {
      continent,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};
