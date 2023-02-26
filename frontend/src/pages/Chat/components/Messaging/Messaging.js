import './Messaging.css';
import { useContext, useState } from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import catAvi from '../../../../static/kitten1.png'
import axios from 'axios'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { pink, deepPurple } from '@mui/material/colors';

import { UserMessagesContext } from '../../../../contexts/UserMessages'
import { CatMessagesContext } from '../../../../contexts/CatMessages';
import { JointMessagesContext } from '../../../../contexts/JointMessages';

let nextId = 0

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

function Messaging() {
    const [userMessages, setUserMessages] = useContext(UserMessagesContext)
    const [catMessages, setCatMessages] = useContext(CatMessagesContext)
    const [jointMessages, setJointMessages] = useContext(JointMessagesContext)
    const [userInputMessage, setUserInputMessage] = useState("")

    const handleUpdateMessage = (e) => {
        setUserInputMessage(e.target.value)
    }

    const handleSendMessage = async (e) => {
        e.preventDefault()
        await setUserMessages([...userMessages, { key: nextId++, message: userInputMessage }])
        await handleCatResponse()
        setUserInputMessage('')
        console.log(userMessages)
        // setJointMessages([...jointMessages,
        // {
        //     key: userMessages.splice(-1)[0].key,
        //     message: userInputMessage
        // },
        // {
        //     key: catMessages.splice(-1)[0].key,
        //     message: catMessages.splice(-1)[0].message
        // }])
        console.log(jointMessages)
    }

    const handleCatResponse = async () => {
        const req = {
            query: userInputMessage
        }

        await axios.post("http://localhost:4000/chat", req)
            .then((response) => {
                console.log('Chatbot responded successfully: ', response.data);
                setCatMessages([...catMessages, { key: nextId++, message: response.data }])
            })
            .catch((error) => {
                console.log('Error:', error);
            })
    }


    return (
        <div className='messaging-outline'>
            <div>
                <Box sx={{
                    width: '100%',
                    minHeight: '70vh',
                    marginBottom: '5vh',
                    backgroundColor: '#EFF6E0',
                }}>
                    {userMessages.map(item =>
                    (
                        <div className="user-message">
                            <p className='user-text' key={item.key}>{item.message}</p>
                            <Avatar sx={{ bgcolor: deepPurple[500] }} alt="CatGPT">MC</Avatar>
                        </div>
                    )
                    )

                    }
                    {jointMessages.map(item =>
                        item.key / 2 === 0 ?
                            (
                                <div className="user-message">
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar sx={{ bgcolor: pink[500] }} alt="CatGPT" src={catAvi} variant='rounded' />
                                    </StyledBadge>
                                    <p style={{ marginLeft: "2vh" }} key={item.key}>{item.message}</p>
                                </div>
                            )
                            :
                            (
                                <div style={{ display: "flex", marginLeft: "3vh" }}>
                                    <StyledBadge
                                        overlap="circular"
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                        variant="dot"
                                    >
                                        <Avatar sx={{ bgcolor: pink[500] }} alt="CatGPT" src={catAvi} variant='rounded' />
                                    </StyledBadge>
                                    <p style={{ marginLeft: "2vh" }} key={item.key}>{item.message}</p>
                                </div>
                            ))}
                </Box>
            </div>
            <form className='messaging-input' onSubmit={handleSendMessage} >
                <Input placeholder='Ask CatGPT!' sx={{ width: "92%" }} onChange={handleUpdateMessage} value={userInputMessage} ></Input>
                <Button variant='contained' sx={{ marginLeft: "5vh" }} onClick={handleSendMessage} ><SendIcon /></Button>
            </form>
        </div>
    )
}

export default Messaging;
