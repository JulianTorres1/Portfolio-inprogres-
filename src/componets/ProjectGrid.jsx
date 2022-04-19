import React from "react";
import {
    Box,
    Center,
    Container,
    Heading,
    SimpleGrid,
    Text,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from "@chakra-ui/react";
import ProjectCard from "./ProjectCard.jsx";

class HelloMessage extends React.Component {
    render() {
        return (
            <box>
                <box>
                    <Center>
                        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                            <Text
                                as={'span'}
                                position={'relative'}
                                _after={{
                                    content: "''",
                                    width: 'full',
                                    position: 'absolute',
                                    bottom: 1,
                                    left: 0,
                                    bg: 'blue.400',
                                    zIndex: -1,
                                }}>
                                Portfolio
                            </Text>
                        </Heading>
                    </Center>
                </box>



                <Container  maxW='container.lg'>

                    <Alert status='error' rounded='10' h={50}>
                        <AlertIcon />
                        <AlertTitle mr={2}>This Site Is On building!</AlertTitle>
                        <AlertDescription>Some Projects are not available yet</AlertDescription>
                        <CloseButton position='absolute' right='5px' top='8px' />
                    </Alert>

                    <SimpleGrid columns={[2, 1, 3]} spacing={10}>
                        <Box  ><ProjectCard/></Box>
                        <Box  ><ProjectCard/></Box>
                        <Box  ><ProjectCard/></Box>
                    </SimpleGrid>
                </Container>
            </box>
        );
    }
}

export default HelloMessage;
