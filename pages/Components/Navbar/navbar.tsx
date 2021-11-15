import { ReactNode } from "react";
import { Box,
    Flex,
    Avatar,
    Link,
    Button,
    useDisclosure,
    Spacer,
    Stack,
    useColorMode,
    Heading, } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import style from "styles/navbar.module.css";

const NavLink = ({ children }: {children:ReactNode}) => (
    <Link 
        px={2}
        py={1}
        rounded = {'md'}
        _hover ={{
            textDecoration: 'none',
        }}
        href={'#'}>
            {children}
        </Link>
)

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return(
        <>
            <Box px={4}>
                <Flex alignItems={'center'} px={'15'} py="1%" justifyContent="space-between">
                <Box w="50%">
                    <Flex alignItems="center">
                        <Avatar size="xl" name="D" src="https://camo.githubusercontent.com/eca7075bb6f146daf7a983d628081189387bcacd3db1019bb301bf926c38022a/68747470733a2f2f692e696d6775722e636f6d2f624433497842522e706e67"/>
                        <Box className={style.stacker}> 
                        <Heading className="position: relative;" size="lg" >David Rosario</Heading>
                        <div className={style.oval}></div>
                        </Box>
                    </Flex>
                </Box>
                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={17}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    </Button>

              
            </Stack>
          </Flex>
        </Flex>
            </Box>
        </>
    )
}