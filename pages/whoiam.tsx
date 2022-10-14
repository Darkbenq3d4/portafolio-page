import style from 'styles/whoiam.module.css';
import { Container, Text, Button, HStack, Box, Image } from "@chakra-ui/react"
import { motion } from 'framer-motion';


export default function WhoIAm()
{
let srcImage = "/Frontend/framer-logo.png";
    return(
        <Container maxW="container.lg" centerContent my="23vh"> 
            <HStack spacing="150px">
                <Box>
                    <motion.div
                     animate={{ y:0, x:0, scale:1}} 
                     transition={{}}
                     initial={{ scale: 0}}>
                    <Image
                     alt="Stock"
                     boxSize={200}
                     src={srcImage}>
                     </Image>
                    </motion.div>
                </Box>
                <Box className={style.Intro} width={'md'}>
                <Text  fontSize="xl" fontFamily="Raleway" fontStyle="italic" fontWeight="semibold" >Hi, I’m name is David. I’m a front-end and backend developer living in Dominican Republic</Text>
                <Text fontWeight="light">I specialize in web development, yet this is only one of my milestones as I still see and learn new frameworks every now and then. My objectives are simple
                    and I always want my clients to have amazing products with great design and amazing performance. </Text>
                <Button mt="5">Interested? Let&apos;s talk! </Button>
                </Box>
            </HStack>
        </Container>
    )
}