import { Box,
    Flex,
    Avatar,
    Button,
    Container,
    ButtonGroup,
    useColorMode,
    Link,
    Heading, } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import style from "styles/navbar.module.css";

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();
    return(
        <Container maxW="container.lg">
            <Box px={4}  boxShadow={"0px 2px 0px #989898"}>
                <Flex alignItems={'center'} px={'15'} py="1%" justifyContent="space-between">
                <Box w="50%">
                    <Flex alignItems="center">
                        <Avatar size="xl" name="D" src="https://camo.githubusercontent.com/eca7075bb6f146daf7a983d628081189387bcacd3db1019bb301bf926c38022a/68747470733a2f2f692e696d6775722e636f6d2f624433497842522e706e67"/>
                        <Box className={style.stacker}> 
                        <Heading className="position: relative;" size="xl" >David Rosario</Heading>
                        <div className={style.oval}></div>
                        </Box>
                    </Flex>
                </Box>
                <Flex className={style.NavbarLinks} alignItems={'center'} mt={50}>
                    <ButtonGroup variant="link" spacing="25" >
                    <Button fontSize={25}>
                        <Link href="/">Who I Am</Link>
                    </Button>
                    <Button fontSize={25}>
                        <Link href='/knowledge'>What I Know</Link>
                    </Button>
                    <Button fontSize={25}>
                        <Link href='/projects'>Projects</Link>
                    </Button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>
                    </ButtonGroup>
          </Flex>
        </Flex>
            </Box>
        </Container>
    )
}