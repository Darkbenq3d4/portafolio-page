import style from 'styles/whoiam.module.css';
import { Container, Text, Button, HStack, Box, Image } from "@chakra-ui/react"
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
const [imageKey, setImageKey] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
        setImageKey((Key) => Key + 1);
        if(imageKey == images.length - 1) setImageKey(0);      
    }, 5000);
    return () => clearInterval(interval);
})
    return(
        <Container maxW="container.lg" centerContent my="23vh"> 
            <HStack spacing="150px">
                <Box>
                    <AnimatePresence exitBeforeEnter>
                        <motion.div
                         initial={{opacity:0}}
                         animate={{
                            opacity:1,
                            transition: {
                                duration: 0.5
                            }
                         }}
                         exit={{opacity:0}}
                         key={imageKey}>
                            <Image
                            alt="Stock"
                            boxSize={200}
                            src={images[imageKey]} 
                            />
                        </motion.div>
                    </AnimatePresence>
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
                <Button
                 mt="5"
                 as={motion.button}
                 whileHover={{ scale: 1.5, backgroundColor:'rgb(124, 191, 176)'}}
                 >
                    Interested? Let&apos;s talk!
                </Button>
                </Box>
            </HStack>
        </Container>
    )
}