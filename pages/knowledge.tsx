import Head from 'next/head'
import { Container, Text, Button, HStack, Box, Img } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import SwiperCore, { 
  Autoplay, Pagination, Navigation
} from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

export default function WhatDoIknow() {

  

  return(
    <>
    <Head>
      <title>David Rosario - What I Know</title>
    </Head>
    <Container maxW="container.md" centerContent my="23vh">
      <HStack spacing="100px">
        <Box maxW={'35vh'}>
          <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false,
          }} navigation={true} className='mySwiper'>
            <SwiperSlide>
              <Img src='Frontend/angular-icon.svg' height={'35vh'} />
            </SwiperSlide>
            <SwiperSlide>
            <Img src='Frontend/reactjs-icon.svg' height={'35vh'} />
            </SwiperSlide>

          </Swiper>
        </Box>
        <Box id='Text'>
          <Text fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold">Things I do in the Front!</Text>
        </Box>
      </HStack>
    </Container>

    </>
  )
}