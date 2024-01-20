import {
    Box,
    Button,
    Flex,
    LoadingOverlay,
    TextInput,
    Image,
    Text
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import HomeContext from "@state/index.context";
import axiosConfig from "@util/axiosConfig";
import { URL_AUTH_SIGNIN } from "@util/urls";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';

const Signin = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [type, setType] = useState<"signin" | "signup">("signin");

    const router = useRouter();

    const {
        state: { user_data },
        dispatch: homeDispatch,
    } = useContext(HomeContext);

    const signinForm = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            password: hasLength({ min: 8 }, 'Password must be less 8 characters long'),
            email: isEmail('Invalid email'),
        },
    });

    const signupForm = useForm({
        initialValues: {
            email: '',
            password: '',
            name: ''
        },
        validate: {
            password: hasLength({ min: 8 }, 'Password must be less 8 characters long'),
            name: hasLength({ min: 3 }, 'Password must be less 3 characters long'),
            email: isEmail('Invalid email'),
        },
    });
    
    const signin = () => {
        homeDispatch({
            "field": "user_data",
            "value": signinForm.values
        })
        router.push("/offers");
    }
    const signup = () => {
        homeDispatch({
            "field": "user_data",
            "value": signupForm.values
        })
    }
    return (
        <Flex
            sx={(theme) => ({
                width: '100vw',
                height: '100vh',
            })}
            direction={'column'}
            justify={'center'}
            align={'center'}
        >

            <Flex
                direction={'column'}
                align={'center'}
            >
                <Image src='/logo.svg' style={{ width: '100px' }} />
                {
                    type == "signin" ?
                        <Box component="form" maw={400} mx="auto" onSubmit={signinForm.onSubmit(() => {
                            signin()
                        })}>
                            <Flex
                                direction={'column'}
                                gap={'20px'}
                            >
                                <TextInput label="Email" placeholder="Email" withAsterisk {...signinForm.getInputProps('email')} mt={30} w={350} />
                                <TextInput
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    withAsterisk
                                    {...signinForm.getInputProps('password')}
                                    w={350}
                                />
                                <Button
                                    type="submit"
                                >
                                    Sign In
                                </Button>
                                <Flex gap={10} justify={'center'}>
                                    <Text>
                                        Not a member
                                    </Text>
                                    <Text color="#0099ff" weight={600} style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setType('signup')
                                        }}
                                    >
                                        Sign Up
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                        :
                        <Box component="form" maw={400} mx="auto" onSubmit={signinForm.onSubmit(() => {
                            signup()
                        })}>
                            <Flex
                                direction={'column'}
                                gap={'20px'}
                            >
                                <TextInput label="Name" placeholder="Name" withAsterisk {...signupForm.getInputProps('name')} mt={30} w={350} />
                                <TextInput label="Email" placeholder="Email" withAsterisk {...signupForm.getInputProps('email')} w={350} />
                                <TextInput
                                    label="Password"
                                    type="password"
                                    placeholder="Password"
                                    withAsterisk
                                    {...signupForm.getInputProps('password')}
                                    w={350}
                                />
                                <Button type="submit">
                                    Sign Up
                                </Button>
                                <Flex gap={10} justify={'center'}>
                                    <Text>
                                        Are you member
                                    </Text>
                                    <Text color="#0099ff" weight={600} style={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            setType('signin')
                                        }}
                                    >
                                        Sign In
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>

                }

            </Flex>
            <LoadingOverlay visible={isLoading} />
        </Flex>
    )
}

export default Signin;
