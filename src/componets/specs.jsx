import React from "react";
import {
    chakra,
    Box,
    SimpleGrid,
    Flex,
    useColorModeValue,
    Icon,
} from "@chakra-ui/react";

import {FaCameraRetro, FaJava, FaLinux, FaReact} from 'react-icons/fa';

export default function Fgl() {
    const Feature = (props) => {
        return (
            <Box>
                <Flex
                    alignItems="center"
                    justifyContent="center"
                    w={10}
                    h={10}
                    mb={5}
                    rounded="full"
                    color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
                    bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
                >
                    <Icon
                        boxSize={20}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {props.icon}
                    </Icon>
                </Flex>
                <chakra.h3
                    mb={2}
                    fontWeight="semibold"
                    lineHeight="shorter"
                    color={useColorModeValue("gray.900")}
                >
                    {props.title}
                </chakra.h3>
                <chakra.p
                    fontSize="sm"
                    color={useColorModeValue("gray.500", "gray.400")}
                >
                    {props.children}
                </chakra.p>
            </Box>
        );
    };
    return (
        <Flex
            bg={useColorModeValue("#F9FAFB", "gray.600")}
            p={20}
            w="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                px={8}
                py={20}
                mx="auto"
                bg={useColorModeValue("white", "gray.800")}
                shadow="xl"
            >
                <Box marginBottom={20} textAlign={{ lg: "center" }}>
                    <chakra.p
                        mt={2}
                        fontSize={{ base: "3xl", sm: "4xl" }}
                        lineHeight="8"
                        fontWeight="extrabold"
                        letterSpacing="tight"
                        color={useColorModeValue("gray.900")}
                    >
                        Technologies That I Use!
                    </chakra.p>


                </Box>


                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                    spacingX={{ base: 16, lg: 24 }}
                    spacingY={20}
                    mt={6}
                >
                    <Feature
                        color="red"
                        title="Java"
                        icon={
                            <FaJava/>
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur cum ea eum fugiat ipsam minus omnis quae soluta, veritatis?
                    </Feature>

                    <Feature
                        color="blue"
                        title="React"
                        icon={
                            <FaReact/>
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur corporis dolorem eligendi iste labore neque, nostrum officiis possimus quasi veniam?
                    </Feature>

                    <Feature
                        color="yellow"
                        title="Linux & Unix"
                        icon={
                            <FaLinux/>
                        }
                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aperiam id molestiae nisi officia quas quod saepe sequi similique!
                    </Feature>

                    <Feature
                        color="black"
                        title="graphics and design"
                        icon={
                            <FaCameraRetro/>
                        }

                    >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquam distinctio illum iure nostrum perferendis quo reprehenderit saepe voluptatum.
                    </Feature>


                </SimpleGrid>
            </Box>
        </Flex>
    );
}

