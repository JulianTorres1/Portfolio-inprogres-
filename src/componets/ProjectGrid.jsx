import React from "react";
import ReactDOM from "react-dom";
import {Box, Container, SimpleGrid, useColorMode} from "@chakra-ui/react";
import ProjectCard from './ProjectCard';


class HelloMessage extends React.Component {
    render() {
        return (
            <box>
                <Container>
                    <SimpleGrid columns={3} spacing={10}>
                        <Box border='1px' roundedBottom={1} height='350px'></Box>
                        <Box border='1px' roundedBottom={1} height='350px'></Box>
                        <Box border='1px' roundedBottom={1} height='350px'></Box>

                    </SimpleGrid>
                </Container>
            </box>
        );
    }
}

export default HelloMessage;
