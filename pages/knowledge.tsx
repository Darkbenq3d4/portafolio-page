import Head from 'next/head'
import { Container, Text, HStack, Box, Img, UnorderedList, ListItem, Grid, Stack, VStack, GridItem } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backendImagesJson from "../Json/backendImages.json";
import devopsImagesJson from "../Json/devopsImages.json";
import frontendImagesJson from "../Json/frontendImages.json";
import Slideshow from '../Components/slideshow';

export default function WhatDoIknow() {

  const frontendImages:  string[] = frontendImagesJson;
  const backendImages: string[] = backendImagesJson;
  const devopsImages: string[] = devopsImagesJson;

  return(
    <>
    <Head>
      <title>David Rosario - What I Know</title>
    </Head>
    <Container maxW="container.lg" centerContent my="10vh"> 
    <HStack>   
          <Box>
            <Text fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold">Frontend Design!</Text>
            <Text fontWeight={"light"}>No matter how good a product is without a good brand that represents it.</Text>
            <Slideshow imagesArray={frontendImages}/>
          </Box>
          <Box>
            <Text fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold">Backend Work!</Text>
            <Text fontWeight={"light"}>The beauty of a book is not in the portrait, but the content inside the same book.</Text> 
            <Slideshow imagesArray={backendImages}/>
          </Box>
          <Box>
          <Text fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold">DevOps!</Text>
          <Text fontWeight={"light"}>Tools and frameworks for all your DevOps needs.</Text>
          <Slideshow imagesArray={devopsImages}/>
          </Box>
          </HStack>
    </Container>

    </>
  )
}