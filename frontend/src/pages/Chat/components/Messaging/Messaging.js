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

let nextId = 0;

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
  const [messages, setMessages] = useContext(MessagesContext);
  const [userMessage, setUserMessage] = useState('');

  const handleUpdateMessage = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    setMessages((prevMessage) => [...prevMessage, { isUser: true, message: userMessage }]);
    console.log(messages);
    setUserMessage('');
    handleCatResponse();
  };

  const handleCatResponse = async () => {
    const req = {
      query: userMessage,
    };

    await axios
      .post('http://localhost:4000/chat', req)
      .then((response) => {
        console.log('Chatbot responded successfully: ', response.data);
        setMessages((prevMessage) => [...prevMessage, { isUser: false, message: response.data }]);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div className="messaging-outline">
      <div>
        <Box
          sx={{
            width: '100%',
            minHeight: '70vh',
            marginBottom: '5vh',
            backgroundColor: '#EFF6E0',
          }}
        >
          {messages.map((item) =>
            item.key ? (
              <div className="user-message" key={Math.random() * 9999999}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{ bgcolor: pink[500] }} alt="CatGPT" src={catAvi} variant="rounded" />
                </StyledBadge>
                <p style={{ marginLeft: '2vh' }} key={item.key}>
                  {item.message}
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', marginLeft: '3vh' }} key={Math.random() * 9999999}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar sx={{ bgcolor: pink[500] }} alt="CatGPT" src={catAvi} variant="rounded" />
                </StyledBadge>
                <p style={{ marginLeft: '2vh' }} key={item.key}>
                  {item.message}
                </p>
              </div>
            )
          )}
        </Box>
      </div>
      <form className="messaging-input" onSubmit={handleSendMessage}>
        <Input
          placeholder="Ask CatGPT!"
          sx={{ width: '92%' }}
          onChange={handleUpdateMessage}
          value={userMessage}
        ></Input>
        <Button variant="contained" sx={{ marginLeft: '5vh' }} onClick={handleSendMessage}>
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}

export default Messaging;
