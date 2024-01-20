import { Box,
    Flex,
    Button,
    Text
} from "@mantine/core";
import { MOBILE_WIDTH, SCREEN_WIDTH } from "@util/consts";
import Chat from '@component/Chat'
import { useMediaQuery } from '@mantine/hooks';

const Negociation = () => {
    
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
                w={SCREEN_WIDTH}
                sx={(theme) =>({
                    width: isMobile?'100%':SCREEN_WIDTH
                })}
                p={20}
            >
                <Flex gap={20} direction={'column'}>
                    <Text color="white" size={57} weight={'bold'}>
                        Open Negociation  
                    </Text>
                    <Flex gap={20}>
                        <Button radius={30} size="lg">
                            Choose Offer
                        </Button>
                        <Button radius={30} size="lg" color="yellow">
                            Terms of Use
                        </Button>
                        <Button variant="outline" color="lime" size="lg" radius={30}>
                            Open Chat
                        </Button>
                    </Flex>
                </Flex>
                <Box
                    sx={(theme) => ({
                        borderRadius: '5px',
                        background: 'white'
                    })}
                    w={350}
                >
                    <Chat />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Negociation;