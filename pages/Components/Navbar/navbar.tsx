import { Box,
    Flex,
    Avatar,
    Button,
    Container,
    ButtonGroup,
    useColorMode,
    Link as Chakralink,
    Heading, } from '@chakra-ui/react';
import LinkNext from 'next/link';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import style from "styles/navbar.module.css";
import { motion } from 'framer-motion';

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();
    return(
        <Container maxW="container.lg">
            <Box px={4}  boxShadow={"0px 2px 0px #989898"}>
                <Flex alignItems={'center'} px={'15'} py="1%" justifyContent="space-between">
                    <motion.div
                     animate={{x:0, scale:1}}
                     initial={{scale:0, x:-50}}>
                        <Box w="50%">
                            <Flex alignItems="center">
                                <Avatar size="xl" name="D" src="https://camo.githubusercontent.com/eca7075bb6f146daf7a983d628081189387bcacd3db1019bb301bf926c38022a/68747470733a2f2f692e696d6775722e636f6d2f624433497842522e706e67"/>
                                    <Box className={style.stacker}> 
                                    <Heading className="position: relative;" size="xl" >David Rosario</Heading>
                                    <div className={style.oval}></div>
                                </Box>
                            </Flex>
                        </Box>
                    </motion.div> 
                    <motion.div
                     animate={{x:0, scale:1}}
                     initial={{x:50, scale:0}}>
                        <Flex className={style.NavbarLinks} alignItems={'center'} mt={50}>
                            <ButtonGroup variant="link" spacing="25" >
                                <Button fontSize={25}>
                                    <LinkNext href="/">
                                       <Chakralink>Who I Am</Chakralink>
                                    </LinkNext>
                                </Button>
                                <Button fontSize={25}>
                                    <LinkNext href='/knowledge'>
                                        <Chakralink>What I Know</Chakralink>
                                    </LinkNext>
                                </Button>
                                <Button fontSize={25}>
                                    <LinkNext href='/projects'>
                                        <Chakralink>
                                            Projects
                                        </Chakralink>
                                    </LinkNext>
                                </Button>
                                <Button onClick={toggleColorMode}>
                                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                </Button>
                            </ButtonGroup>
                        </Flex>
                    </motion.div>
                </Flex>
            </Box>
        </Container>
    )
}