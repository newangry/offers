import { Box, Image, Flex, Text, TextInput, Select, Button } from "@mantine/core";
import { TimeInput } from '@mantine/dates';
import { SCREEN_WIDTH } from "@util/consts";
import { useMediaQuery } from '@mantine/hooks';

const Offers = () => {
    const isMobile = useMediaQuery(`(max-width: ${SCREEN_WIDTH}px)`);

    return (
        <Flex
            p={20}
            direction={'column'}
            justify={'center'}
            align={'center'}
            h={'100%'}
        >
            <Flex
                gap={50}
                align={'center'}
                justify={'space-between'}
                sx={(theme)=>({
                    width: isMobile?'100%':SCREEN_WIDTH
                })}
                p={20}
            >
                <Flex gap={20} direction={'column'}>
                    <Text color="white" size={57} weight={'bold'}>
                        Offer
                    </Text>
                    
                    <Flex gap={20}>
                        <Button radius={30} size="lg">
                            Seller
                        </Button>
                        <Button variant="outline" color="lime" size="lg" radius={30}>
                            Buyer
                        </Button>
                    </Flex>
                </Flex>
                <Box
                    sx={(theme) => ({
                        borderRadius: '5px',
                        background: 'white'
                    })}
                    p={30}
                >
                    <Flex
                        direction={'column'}
                        gap={20}
                    >
                        <Text align="center" weight={'bold'} size={25}>
                            Product Specification*
                        </Text>
                        <TextInput label="Amount*" placeholder="Full Name" size="lg" />
                        <TextInput mt="md" label="Email Address*" placeholder="Email" size="lg" />
                        <Select
                            data={[]}
                            placeholder="Spot/Contract - CIF/FOB"
                            label="Type*"
                            size="lg"
                        />
                        <Select
                            data={[]}
                            placeholder="chose herer"
                            label="Destination Port *"
                            size="lg"
                        />
                        <Button size="lg">
                            Next
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Offers;