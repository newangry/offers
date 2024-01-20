import { Box, 
    Grid, 
    Text, 
    Flex, 
    TextInput, 
    Select, 
    Button,
    Card, 
    Group} from "@mantine/core";
import { FaUsers } from "react-icons/fa6";

const Offers = () => {
    return (
        <Box pt={50}>
            <Grid gutter={20}>
                <Grid.Col md={3} sm={12}>
                    <Box>
                        <Text weight={'bold'} size={24}>
                            Search Offer
                        </Text>
                        <Flex
                            direction={'column'}
                            gap={20}
                            mt={30}
                        >
                            <TextInput label="Amount*" placeholder="Full Name" size="md" />
                            <TextInput mt="md" label="Email Address*" placeholder="Email" size="md" />
                            <Select
                                data={[]}
                                placeholder="Spot/Contract - CIF/FOB"
                                label="Type*"
                                size="md"
                            />
                            <Select
                                data={[]}
                                placeholder="chose herer"
                                label="Destination Port *"
                                size="md"
                            />
                            <Button size="md">
                                Done
                            </Button>
                        </Flex>
                    </Box>
                </Grid.Col>
                <Grid.Col md={9} sm={12}>
                    <Grid>
                        <Grid.Col lg={4} md={6} sm={12}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section bg={'#2DC071'}>
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
                                            Offer Registration
                                        </Text>
                                    </Flex>
                                </Card.Section>
                                <Group position="apart" mt="md" mb="xs">
                                    <Text weight={500}>Norway Fjord Adventures</Text>
                                </Group>
                                <Text size="sm" color="dimmed">
                                    we offer the perfect en++vironment for high-level negotiation
                                    Our certification, encryption and complete forms tools
                                    Our certification, encryption and complete forms tools
                                </Text>
                                <Button color="green" mt={30} fullWidth>
                                    Request more informations
                                </Button>
                            </Card>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6} sm={12}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section bg={'#2DC071'}>
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
                                            Offer Registration
                                        </Text>
                                    </Flex>
                                </Card.Section>
                                <Group position="apart" mt="md" mb="xs">
                                    <Text weight={500}>Norway Fjord Adventures</Text>
                                </Group>
                                <Text size="sm" color="dimmed">
                                    we offer the perfect en++vironment for high-level negotiation
                                    Our certification, encryption and complete forms tools
                                    Our certification, encryption and complete forms tools
                                </Text>
                                <Button color="green" mt={30} fullWidth>
                                    Request more informations
                                </Button>
                            </Card>
                        </Grid.Col>
                        <Grid.Col lg={4} md={6} sm={12}>
                            <Card shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section bg={'#2DC071'}>
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
                                            Offer Registration
                                        </Text>
                                    </Flex>
                                </Card.Section>
                                <Group position="apart" mt="md" mb="xs">
                                    <Text weight={500}>Norway Fjord Adventures</Text>
                                </Group>
                                <Text size="sm" color="dimmed">
                                    we offer the perfect en++vironment for high-level negotiation
                                    Our certification, encryption and complete forms tools
                                    Our certification, encryption and complete forms tools
                                </Text>
                                <Button color="green" mt={30} fullWidth>
                                    Request more informations
                                </Button>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default Offers;