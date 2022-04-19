import {
    Badge,
    Button,
    Center,
    Box,
    Stack,
    Text, useColorModeValue, useColorMode,
} from '@chakra-ui/react';


export default function socialProfileWithImageHorizontal() {

    return (
        <Center>
            <Box
                bg={'white'}
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '50rem' }}
                height={{ sm: '50rem', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}
                boxShadow={'2xl'}
                padding={5}
                mb={10}
            >
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={3}
                    pt={4}
                >
                    <Text
                        fontSize={20}
                        textAlign={'center'}

                        px={3}>
                        Nicolas is a freelance and a Software Engineer, and web dev  based in Cartagena with a passion for building digital services/stuff he wants.  From planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his studying Software Engineer career in Cartagena university.

                    </Text>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                        <Badge
                            px={2}
                            py={1}

                            fontWeight={'400'}>
                            #ArchBTW
                        </Badge>
                        <Badge
                            px={2}
                            py={1}

                            fontWeight={'400'}>
                            #photography
                        </Badge>
                        <Badge
                            px={2}
                            py={1}

                            fontWeight={'400'}>
                            #MechKeyboards
                        </Badge>
                    </Stack>

                    <Stack
                        width={'100%'}
                        mt={'2rem'}
                        direction={'row'}
                        padding={2}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'gray.300'}
                            _focus={{
                                bg: 'gray.500',
                            }}>
                            Message
                        </Button>
                        <Button
                            flex={1}
                            fontSize={'sm'}
                            rounded={'full'}
                            bg={'#D9541B'}
                            color={'white'}
                            boxShadow={
                                '0px 1px 25px -5px rgb(217 84 27 / 48%), 0 10px 10px -5px rgb(245 118 55 / 43%)'
                            }
                            _hover={{
                                bg: '#F57637',
                            }}
                            _focus={{
                                bg: '#F57637',
                            }}>
                            Follow
                        </Button>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    );
}
