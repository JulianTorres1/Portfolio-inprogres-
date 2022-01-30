import React from "react";
import ReactDOM from "react-dom";
import {
    Box,
    Center,
    color,
    Container,
    extendTheme,
    Heading,
    SimpleGrid,
    Text,
    useBreakpointValue,
    useColorMode
} from "@chakra-ui/react";
import ProjetCard from "./ProjectCard.jsx";
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
                    <SimpleGrid columns={3} spacing={10}>
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
