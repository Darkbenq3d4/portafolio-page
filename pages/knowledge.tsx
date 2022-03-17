import Head from 'next/head'
import { Container, Text, HStack, Box, Img, UnorderedList, ListItem, Stack } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import backendImagesJson from "../Json/backendImages.json";
import devopsImagesJson from "../Json/devopsImages.json";

export default function WhatDoIknow() {

  const frontendImages: {key:number, src_root: string, title: string}[] = [
    {key: 0,src_root:"/Frontend/angular-icon.svg", title:'Angular Framework'},
    {key: 1,src_root:"/Frontend/reactjs-icon.svg", title:'React JS Framework'},
    {key: 2,src_root:"/Frontend/bootstrap-4.svg", title:'Bootstrap Framework'},
  ] 

  const backendImages: {key:number, src_root: string, title: string}[] = backendImagesJson;
  const devopsImages: {key:number, src_root: string, title: string}[] = devopsImagesJson;
  

  let frameworkList = (ImageArrays:{key:number,src_root: string, title: string}[]) => {
    return(
        ImageArrays.map(
          ({key, src_root, title}) =>  
            <ListItem my={"5px"} mx={"5"}>
                <Img key={key.toString()} src={src_root} alt={title} boxSize={'100px'} width={'150px'}/>
            </ListItem>
          )
    )
  }
  

  return(
    <>
    <Head>
      <title>David Rosario - What I Know</title>
    </Head>
    <Container maxW="container.lg" centerContent my="10vh">
      <HStack spacing="10px">
        <Box>
          <Text fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold">Frontend Design!</Text>
          <Text fontWeight={"light"}>No matter how good a product is without a good brand that represents it.</Text>
          <UnorderedList styleType={"none"}>
            {frameworkList(frontendImages)}
          </UnorderedList>
        </Box>
        <Box>
          <Text fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold">Backend Work!</Text>
          <Text fontWeight={"light"}>The beauty of a book is not in the portrait, but the content inside the same book.</Text> 
          <UnorderedList styleType={"none"}>
            {frameworkList(backendImages)}
          </UnorderedList>
        </Box>
        <Box>
        <Text fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold">DevOps!</Text>
        <Text fontWeight={"light"}>Tools and frameworks for all your DevOps needs.</Text>
        <UnorderedList styleType={"none"}>
          {frameworkList(devopsImages)}
        </UnorderedList>
        </Box>

      </HStack>
    </Container>

    </>
  )
}