import style from 'styles/whoiam.module.css';
import { Container, Text, Button, HStack, Box, Image } from "@chakra-ui/react"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Slideshow from '../Components/slideshow';
export default function WhoIAm()
{
const images = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
    "https://angular.io/assets/images/logos/angular/angular.svg",
    "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    "https://seeklogo.com/images/N/nestjs-logo-09342F76C0-seeklogo.com.png",
    "https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg"
];
const btnVariant = {
    rest: {scale: 1},
    hover: {scale: 1.5}
}
const textVariant = {
    rest: {scale: 1, x:'50%', ease:'easeIn', type:"tween"},
    hover: {
        scale: 0,
        x:'-50%',
        transition:{
            duration: 0.2,
            type: 'tween',
            ease:'easeOut'
        }
    }
}
const textVariant2 = {
    rest: {scale: 0, x:'50%', ease:'easeOut', duration: 0.2, type:'tween'},
    hover: {
        scale:1,
        x:'-50%',
        transition:{
            duration: 0.2,
            type:'tween',
            ease:'easeIn'
        }
    }
}
    return(
        <Container maxW="container.lg" centerContent my="23vh"> 
            <HStack spacing="150px">
                <Box>
                    <Slideshow imagesArray={images} />
                </Box>
                <Box className={style.Intro} width={'md'}>
                <Text 
                 fontSize="xl" 
                 fontFamily="Raleway"
                 fontStyle="italic" 
                 fontWeight="semibold" >
                    Hi, I’m name is David. I’m a front-end and backend developer living in Dominican Republic
                </Text>
                <Text fontWeight="light">
                    I specialize in web development, yet this is only one of my milestones as I still see and learn new frameworks every now and then. My objectives are simple
                    and I always want my clients to have amazing products with great design and amazing performance.
                </Text>
                <motion.div
                 initial='rest'
                 whileHover='hover'
                 animate='rest'>
                    <Button
                     mt="5"
                     as={motion.button}
                     variants={btnVariant}>
                        <Text
                         as={motion.p}
                         variants={textVariant}
                         justifyContent='center'>
                        Interested?&nbsp;
                        </Text>
                        <Text 
                         as={motion.p}
                         variants={textVariant2}
                        > 
                        Let&apos;s talk!
                        </Text>
                    </Button>
                </motion.div>
                </Box>
            </HStack>
        </Container>
    )
}