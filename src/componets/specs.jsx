import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon,Container, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import { motion } from "framer-motion"

interface FeatureProps {
    title: string;
    text: string;
    icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'gray.100'}
                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    );
};

export default function SimpleThreeColumns() {
    return (
        <Container centerContent>
            <Box m={5} maxW='3xl'>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    style={{ x: 100 }}
                />
                <SimpleGrid columns={[3, 2, 2]} spacing={10}>


                    <Feature
                        icon={<Icon as={FcAssistant} w={10} h={10} />}
                        title={'Java'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcDonate} w={10} h={10} />}
                        title={'ReactJS'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcInTransit} w={10} h={10} />}
                        title={'Unix/Linux '}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    />
                    <Feature
                        icon={<Icon as={FcInTransit} w={10} h={10} />}
                        title={'Media & Grafics'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    />
                </SimpleGrid>
            </Box>
        </Container>
    );
}
