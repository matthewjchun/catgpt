import './Messaging.css';
import { useContext, useState } from 'react';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { MessagesContext } from '../../../../contexts/Messages'
import axios from 'axios'

let nextId = 0

function Messaging() {
    const [messages, setMessages] = useContext(MessagesContext)
    const [userMessage, setUserMessage] = useState("")

    const handleUpdateMessage = (e) => {
        setUserMessage(e.target.value)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        setMessages([...messages, { key: nextId++, message: userMessage }])
        setUserMessage('')
    }

    const handleCatResponse = (e) => {
        
    }

    return (
        <div className='messaging-outline'>
            <div>
                <Box sx={{
                    width: '100%',
                    height: '70vh',
                    marginBottom: '5vh',
                    backgroundColor: '#EFF6E0',
                }}>
                    {messages.map(item =>
                    (
                        <p key={item.key}>{item.message}</p>
                    ))}
                </Box>
            </div>
            <form className='messaging-input' onSubmit={handleSendMessage} >
                <Input placeholder='Ask CatGPT!' sx={{ width: "92%" }} onChange={handleUpdateMessage} value={userMessage} ></Input>
                <Button variant='contained' sx={{ marginLeft: "5vh" }} onClick={handleSendMessage}><SendIcon /></Button>
            </form>
        </div>
    )
}

export default Messaging;
