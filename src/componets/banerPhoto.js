import { Component } from 'react';
import {Image, Box, Center} from "@chakra-ui/react";

import baner from '../img/baner.jpg';

class bgImgCustom extends Component {
    render() {
        return (

            <Center>
                <Box 
                    boxSize={'95%'}
                    mb={10}
                    >
                    <Image
                        src={baner}
                        alt='baner img'
                        borderWidth="1px"
                        borderRadius="lg"
                        position="relative"
                        top={-150}
                        
                        
                    />                
                </Box>
            </Center>

        );
    }
}

export default bgImgCustom;