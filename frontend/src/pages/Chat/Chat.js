import './Chat.css';
import ChatHeader from './components/ChatHeader/ChatHeader';
import Messaging from './components/Messaging/Messaging';

function Chat() {
  return (
    <div className='chat-background'>
      <ChatHeader></ChatHeader>
      <Messaging></Messaging>
    </div>
  )
}

export default Chat;
