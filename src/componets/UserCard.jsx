import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Link,
    Stack,
    Text, useColorMode,
    useColorModeValue,
} from '@chakra-ui/react';

function StyleColorMode() {
    const { toggleColorMode } = useColorMode()

    const bg = useColorModeValue('red.500', 'red.200')
    const color = useColorModeValue('white', 'gray.800')
}

export default function socialProfileWithImageHorizontal() {


    return (
        <Center py={6}>
            <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: '100%', md: '540px' }}
                height={{ sm: '476px', md: '20rem' }}
                direction={{ base: 'column', md: 'row' }}

                boxShadow={'2xl'}
                padding={4}>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>

                    <Text
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
                            _focus={{
                                bg: 'gray.200',
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
            </Stack>
        </Center>
    );
}
