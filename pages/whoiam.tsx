import style from 'styles/whoiam.module.css';
import { Container, Text, Button, HStack, Box, Image } from "@chakra-ui/react"

export default function WhoIAm()
{
    return(
        <Container maxW="container.lg" centerContent my="23vh"> 
            <HStack spacing="150px">
                <Box>
                    <Image alt="Stock" boxSize={200}  src="https://static.boredpanda.com/blog/wp-content/uploads/2017/12/funny-weird-wtf-stock-photos-19-5a3926af95d9d__700.jpg"></Image>
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