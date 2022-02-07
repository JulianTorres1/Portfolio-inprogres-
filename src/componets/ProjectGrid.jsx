import React from "react";
import {
    Box,
    Center,
    Container,
    Heading,
    SimpleGrid,
    Text

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
