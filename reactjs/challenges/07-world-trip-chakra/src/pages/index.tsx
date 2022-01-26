import { Divider, Text } from '@chakra-ui/react';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { TravelTypes } from '../components/TravelTypes';

export default function Home() {
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
        w="40"
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
    </>
  );
}
