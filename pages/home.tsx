import About from "@component/Home/about";
import Market from "@component/Home/market";
import Service from "@component/Home/service";
import { Box, Flex } from "@mantine/core";

const Home = () => {
    return (
        <Flex
            w={'100%'}
            direction={'column'}
            gap={50}
            pt={50}
        >
            <Service />
            <Market />
            <About />
        </Flex>
    )
}

export default Home;