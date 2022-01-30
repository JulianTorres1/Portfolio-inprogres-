import React, { ReactNode, Component } from 'react';
import {
    Box,
    Image,
    Flex,
    Avatar,
    Icon,
    Link,
    Button,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
//import images
import logo from '../img/logo.png';

//icons imports an function
import {Camera, Instagram, Twitter, Youtube} from 'react-feather';
import {AttachmentIcon} from '@chakra-ui/icons'


//hoppla

//Component

const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box mt={6} >
                        <Image boxSize='100px' src={logo} alt='Logo-not-found' />
                    </Box>
                    <Spacer />

                    <Flex mr={3}  alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                        </Stack>
                    </Flex>


                    <Flex mr={3} href='https://chakra-ui.com' isExternal alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button>
                                <Link href='https://www.instagram.com/julian_torres362/'>
                                    <Instagram w={6} h={6} />
                                </Link>
                            </Button>
                        </Stack>
                    </Flex>


                    <Flex mr={3} href='https://chakra-ui.com' isExternal alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button>
                                <Link href='https://chakra-ui.com'>
                                    <Youtube w={6} h={6} />
                                </Link>
                            </Button>
                        </Stack>
                    </Flex>

                    <Flex mr={3} href='https://chakra-ui.com' isExternal alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button>
                                <Link href='https://twitter.com/nicolastorrest6'>
                                    <Twitter w={6} h={6} />
                                </Link>
                            </Button>
                        </Stack>
                    </Flex>


                </Flex>
            </Box>
        </>
    );
}
