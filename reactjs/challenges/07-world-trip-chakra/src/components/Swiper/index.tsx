import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { ContinentsProps } from '../../types';

SwiperCore.use([Navigation, Pagination]);

export function Swiper({ continents }: ContinentsProps) {
  return (
    <Flex w='100%' maxWidth={1480} mx='auto'>
      <SwiperReact
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          width: '100%',
          maxWidth: '1480px',
        }}
      >
        {continents.map(({ continent }) => (
          <SwiperSlide key={continent.id}>
            <Link href={`/continent/${continent.name}`}>
              <Flex
                h='72'
                bgImage={`url('${continent.banner}')`}
                bgRepeat='no-repeat'
                bgSize='cover'
                align='center'
                justify='center'
                flexDirection='column'
                fontWeight='bold'
                textAlign='center'
              >
                <Text fontSize='2xl' color='gray.100'>
                  {continent.title}
                </Text>
                <Text w='56' fontSize='sm' color='gray.100' mt='4'>
                  {continent.description}
                </Text>
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </SwiperReact>
    </Flex>
  );
}
