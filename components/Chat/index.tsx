import { Box, Flex, TextInput, ScrollArea } from '@mantine/core'
import { ChatBubble, BubbleGroup, Message } from "react-chat-ui";
import { IconSend2 } from '@tabler/icons-react'
import { FC } from 'react';

const Home = () => {
    return (
        // <Flex w={'100%'}
        //     sx={(theme) => ({
        //         border: '1px solid #0099ff',
        //         padding: 10,
        //         borderRadius: 5,
        //         height: '450px',
        //     })}
        //     direction={'column'}
        //     justify={'space-between'}
        // >

        //     <ScrollArea h={'100%'}>
        //         <BubbleGroup
        //             messages={[
        //                 new Message({ id: 1, message: "Hey!" }),
        //                 new Message({ id: 1, message: "I forgot to mention..." }),
        //                 new Message({
        //                     id: 1,
        //                     message:
        //                         "Oh no, I forgot... I think I was going to say I'm a BubbleGroup"
        //                 })
        //             ]}
        //             id={1}
        //             showSenderName={true}
        //             senderName={"Elon Musk"}
        //         />
        //         <BubbleGroup
        //             messages={[
        //                 new Message({ id: 1, message: "Hey!" }),
        //                 new Message({ id: 1, message: "I forgot to mention..." }),
        //                 new Message({
        //                     id: 1,
        //                     message:
        //                         "Oh no, I forgot... I think I was going to say I'm a BubbleGroup"
        //                 })
        //             ]}
        //             id={1}
        //             showSenderName={true}
        //             senderName={"Elon Musk"}

        //         />
        //         <BubbleGroup
        //             messages={[
        //                 new Message({ id: 0, message: "How could you forget already?!" }),
        //                 new Message({
        //                     id: 0,
        //                     message: "Oh well. I'm a BubbleGroup as well"
        //                 })
        //             ]}
        //             id={1}
        //             showSenderName={true}
        //             senderName={"Elon Musk"}
        //         />
        //     </ScrollArea>
        //     <Flex 
        //     >
        //         <TextInput w={'100%'} rightSection={
        //             <Flex gap={10}>
        //                 <IconSend2 color='#666' size={20} cursor={'pointer'}/>
        //             </Flex>
        //         }/>
        //     </Flex>
        // </Flex>
        <div className='chats' style={{width: '100%', height: '500px'}}>
            <div className="center">
                {/* <div className="contacts">
                    <i className="fas fa-bars fa-2x"></i>
                    <h2>
                        Contacts
                    </h2>
                    <div className="contact">
                        <div className="pic rogers"></div>
                        <div className="badge">
                            14
                        </div>
                        <div className="name">
                            Steve Rogers
                        </div>
                        <div className="message">
                            That is America's ass 🇺🇸🍑
                        </div>
                    </div>
                    <div className="contact">
                        <div className="pic stark"></div>
                        <div className="name">
                            Tony Stark
                        </div>
                        <div className="message">
                            Uh, he's from space, he came here to steal a necklace from a wizard.
                        </div>
                    </div>
                    <div className="contact">
                        <div className="pic banner"></div>
                        <div className="badge">
                            1
                        </div>
                        <div className="name">
                            Bruce Banner
                        </div>
                        <div className="message">
                            There's an Ant-Man *and* a Spider-Man?
                        </div>
                    </div>
                    <div className="contact">
                        <div className="pic thor"></div>
                        <div className="name">
                            Thor Odinson
                        </div>
                        <div className="badge">
                            3
                        </div>
                        <div className="message">
                            I like this one
                        </div>
                    </div>
                    <div className="contact">
                        <div className="pic danvers"></div>
                        <div className="badge">
                            2
                        </div>
                        <div className="name">
                            Carol Danvers
                        </div>
                        <div className="message">
                            Hey Peter Parker, you got something for me?
                        </div>
                    </div>
                </div> */}
                <div className="chat">
                    <div className="contact bar">
                        <div className="pic stark"></div>
                        <div className="name">
                            Tony Stark
                        </div>
                        <div className="seen">
                            Today at 12:56
                        </div>
                    </div>
                    <div className="messages" id="chat">
                        <div className="time">
                            Today at 11:41
                        </div>
                        <div className="message parker">
                            Hey, man! What's up, Mr Stark? 👋
                        </div>
                        <div className="message stark">
                            Kid, where'd you come from?
                        </div>
                        <div className="message parker">
                            Field trip! 🤣
                        </div>
                        <div className="message parker">
                            Uh, what is this guy's problem, Mr. Stark? 🤔
                        </div>
                        <div className="message stark">
                            Uh, he's from space, he came here to steal a necklace from a wizard.
                        </div>
                        <div className="message stark">
                            <div className="typing typing-1"></div>
                            <div className="typing typing-2"></div>
                            <div className="typing typing-3"></div>
                        </div>
                    </div>
                    <div className="input">
                        <i className="fas fa-camera"></i><i className="far fa-laugh-beam"></i><input placeholder="Type your message here!" type="text" /><i className="fas fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface Chat {
    message: string
}

const LeftChat: FC<Chat> = ({ message }) => {
    return (
        <Box>

        </Box>
    )
}

export default Home;