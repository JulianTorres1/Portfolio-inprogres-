import { Component } from 'react';
import {Image} from "@chakra-ui/react";

import banerIMG from '../img/baner.jpg';

class bgImgCustom extends Component {
    render() {
        return (

                <Image src={banerIMG} alt="baner" />

        );
    }
}

export default bgImgCustom;