import { Divider, Text } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import api from '../api/continents.json';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { Swiper } from '../components/Swiper';
import { TravelTypes } from '../components/TravelTypes';
import { ContinentsProps } from '../types';

export default function Home({ continents }: ContinentsProps) {
  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        mx='auto'
        border={1}
        borderStyle='solid'
        borderColor='gray.700'
        w='40'
        opacity='1'
      />
      <Text
        fontSize={['2xl', '4xl']}
        fontWeight='500'
        color='gray.700'
        my='12'
        w='100%'
        textAlign='center'
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Text>
      <Swiper continents={continents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const continents = [];
  api.continents.map((continent) => {
    continents.push({ continent });
  });

  return {
    props: {
      continents,
    },
    revalidate: 60 * 30, // 30 minutes
  };
};
