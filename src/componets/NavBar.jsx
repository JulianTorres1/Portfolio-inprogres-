import React from 'react';
import {
    Box,
    Image,
    Flex,
    Link,
    Button,
    Spacer,
    useColorModeValue,
    Stack,
    useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
//import images
import logo from '../img/logo.png';

//icons imports an function
import { Instagram, Twitter } from 'react-feather';

import GitHubIcon from '@mui/icons-material/GitHub';



//hoppla

//Component
export default function Nav() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
            <Box sticky="top" bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box mt={2} >
                        <Image boxSize='50px' src={logo} alt='Logo-not-found' />
                    </Box>
                    <Spacer />

                    <Flex mr={3}  alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                        </Stack>
                    </Flex>


                    <Flex mr={3} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button>
                                <Link isExternal href='https://www.instagram.com/julian_torres362/'>
                                    <Instagram w={6} h={6} />
                                </Link>
                            </Button>
                        </Stack>
                    </Flex>


                    <Flex mr={3}  alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button>
                                <Link isExternal href='https://github.com/JulianTorres1'>
                                    <GitHubIcon w={6} h={6} />
                                </Link>
                            </Button>
                        </Stack>
                    </Flex>

                    <Flex mr={3} alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button>
                                <Link isExternal href='https://twitter.com/nicolastorrest6'>
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
