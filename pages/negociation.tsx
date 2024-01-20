
import {
    Box,
    Text,
    Flex,
    Grid,
    Card,
    Group,
    Button,
    Image,
    List,
    ThemeIcon
} from "@mantine/core";
import { FaCheck, FaUsers } from "react-icons/fa6";
import Chat from '@component/Chat'

const Negociation = () => {
    return (
        <Box>
            <Flex gap={15} direction={'column'} mt={40}>
                <Text size={40} weight={'bold'} align="center">
                    Your Offer
                </Text>
                <Text color="#737373" size={14} align="center">
                    Here you manage your offers
                </Text>
            </Flex>
            <Grid mt={30}>
                <Grid.Col md={4} sm={12}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section bg={'#8EC2F2'}>
                            <Flex p={20}
                                gap={20}
                                align={'center'}
                                justify={'center'}
                            >
                                <Flex
                                    sx={(theme) => ({
                                        width: 50,
                                        height: 50,
                                        borderRadius: '100%',
                                        background: 'white'
                                    })}
                                    align={'center'}
                                    justify={'center'}
                                >
                                    <FaUsers size={20} color="#8EC2F2" />
                                </Flex>
                                <Text color="white" size={16} weight={'bold'}>
                                    Offer 01/24
                                </Text>
                            </Flex>
                        </Card.Section>
                        <Text color="#737373" size={14} mt={25}>
                            -Sugar IC 45
                        </Text>
                        <Flex direction={'column'} mt={15} gap={5}>
                            <Text color="#737373" size={14} weight={'bold'}>
                                50.000 t
                            </Text>
                            <Text color="#737373" size={14} weight={'bold'}>
                                contract 12 months
                            </Text>
                            <Text color="#737373" size={14} weight={'bold'}>
                                CIF
                            </Text>
                        </Flex>
                        <Flex gap={12} mt={25}>
                            <Text color="#0099ff" style={{ cursor: 'pointer' }} weight={'bold'}>
                                See all
                            </Text>
                            <Text color="#0099ff" style={{ cursor: 'pointer' }} weight={'bold'}>
                                Edit
                            </Text>
                        </Flex>
                    </Card>
                </Grid.Col>
                <Grid.Col md={4} sm={12}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section bg={'#8EC2F2'}>
                            <Flex p={20}
                                gap={20}
                                align={'center'}
                                justify={'center'}
                            >
                                <Flex
                                    sx={(theme) => ({
                                        width: 50,
                                        height: 50,
                                        borderRadius: '100%',
                                        background: 'white'
                                    })}
                                    align={'center'}
                                    justify={'center'}
                                >
                                    <FaUsers size={20} color="#8EC2F2" />
                                </Flex>
                                <Text color="white" size={16} weight={'bold'}>
                                    Offer 01/24
                                </Text>
                            </Flex>
                        </Card.Section>
                        <Text color="#737373" size={14} mt={25}>
                            -Sugar IC 45
                        </Text>
                        <Flex direction={'column'} mt={15} gap={5}>
                            <Text color="#737373" size={14} weight={'bold'}>
                                50.000 t
                            </Text>
                            <Text color="#737373" size={14} weight={'bold'}>
                                contract 12 months
                            </Text>
                            <Text color="#737373" size={14} weight={'bold'}>
                                CIF
                            </Text>
                        </Flex>
                        <Flex gap={12} mt={25}>
                            <Text color="#0099ff" style={{ cursor: 'pointer' }} weight={'bold'}>
                                See all
                            </Text>
                            <Text color="#0099ff" style={{ cursor: 'pointer' }} weight={'bold'}>
                                Edit
                            </Text>
                        </Flex>
                    </Card>
                </Grid.Col>
                <Grid.Col md={4} sm={12}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section bg={'#8EC2F2'}>
                            <Flex p={20}
                                gap={20}
                                align={'center'}
                                justify={'center'}
                            >
                                <Flex
                                    sx={(theme) => ({
                                        width: 50,
                                        height: 50,
                                        borderRadius: '100%',
                                        background: 'white'
                                    })}
                                    align={'center'}
                                    justify={'center'}
                                >
                                    <FaUsers size={20} color="#8EC2F2" />
                                </Flex>
                                <Text color="white" size={16} weight={'bold'}>
                                    Offer 01/24
                                </Text>
                            </Flex>
                        </Card.Section>
                        <Text color="#737373" size={14} mt={25}>
                            -Sugar IC 45
                        </Text>
                        <Flex direction={'column'} mt={15} gap={5}>
                            <Text color="#737373" size={14} weight={'bold'}>
                                50.000 t
                            </Text>
                            <Text color="#737373" size={14} weight={'bold'}>
                                contract 12 months
                            </Text>
                            <Text color="#737373" size={14} weight={'bold'}>
                                CIF
                            </Text>
                        </Flex>
                        <Flex gap={12} mt={25}>
                            <Text color="#0099ff" style={{ cursor: 'pointer' }} weight={'bold'}>
                                See all
                            </Text>
                            <Text color="#0099ff" style={{ cursor: 'pointer' }} weight={'bold'}>
                                Edit
                            </Text>
                        </Flex>
                    </Card>
                </Grid.Col>
            </Grid>
            <Grid mt={30}>
                <Grid.Col md={4} sm={12}>
                    <Box sx={(theme) => ({
                        background: '#252B42',
                        borderRadius: 5
                    })}
                        w={'100%'}
                        p={25}
                    >
                        <Flex justify={'center'}>
                            <Image src={'/people_icon.png'} style={{ width: 30 }} />
                        </Flex>
                        <Text mt={25} color="white" size={24} align="center" weight={'bold'}>
                            Seller
                        </Text>
                        <Flex mt={25} direction={'column'} gap={20}>
                            <List
                                spacing="15px"
                                size="sm"
                                center
                                icon={
                                    <ThemeIcon color="teal" size={30} radius="xl">
                                        <FaCheck size="1rem" />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item><Text color="white" size={14}>NCNDA Signed</Text></List.Item>
                                <List.Item><Text color="white">ICPO RWA accepted</Text></List.Item>
                                <List.Item><Text color="white">NCNDA Signed</Text></List.Item>
                                <List.Item><Text color="white">FCO sent</Text></List.Item>
                                <List.Item><Text color="white">SBLC under analysis</Text></List.Item>

                            </List>
                            <Button fullWidth>
                                Complete Proccess
                            </Button>
                        </Flex>
                    </Box>
                </Grid.Col>
                <Grid.Col md={4} sm={12}>
                    <Chat />
                </Grid.Col>
                <Grid.Col md={4} sm={12}>
                    <Box sx={(theme) => ({
                        background: 'white',
                        borderRadius: 5,
                        border: `1px solid #0099ff`
                    })}
                        w={'100%'}
                        p={25}
                    >
                        <Flex justify={'center'}>
                            <Image src={'/people_icon.png'} style={{ width: 30 }} />
                        </Flex>
                        <Text mt={25} color="white" size={24} align="center" weight={'bold'}>
                            Buyer
                        </Text>
                        <Flex mt={25} direction={'column'} gap={20}>
                            <List
                                spacing="15px"
                                size="sm"
                                center
                                icon={
                                    <ThemeIcon color="teal" size={30} radius="xl">
                                        <FaCheck size="1rem" />
                                    </ThemeIcon>
                                }
                            >
                                <List.Item><Text size={14}>NCNDA Signed</Text></List.Item>
                                <List.Item><Text >ICPO RWA accepted</Text></List.Item>
                                <List.Item><Text >NCNDA Signed</Text></List.Item>
                                <List.Item><Text >FCO sent</Text></List.Item>
                                <List.Item><Text >SBLC under analysis</Text></List.Item>

                            </List>
                            <Button fullWidth>
                                Complete Proccess
                            </Button>
                        </Flex>
                    </Box>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default Negociation;