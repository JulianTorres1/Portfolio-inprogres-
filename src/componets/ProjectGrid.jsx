import React from "react";
import ReactDOM from "react-dom";
import {Box, Container, SimpleGrid, useColorMode} from "@chakra-ui/react";
import ProjetCard from "./ProjectCard.jsx";
import ProjectCard from "./ProjectCard.jsx";


class HelloMessage extends React.Component {
    render() {
        return (
            <box>
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
