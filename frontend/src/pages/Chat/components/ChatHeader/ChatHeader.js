import './ChatHeader.css';
import logo from '../../../../static/paw-logo.png'
import { Link } from 'react-router-dom';

function ChatHeader() {
    return (
        <div className='chat-header-container'>
            <Link to='/' style={{ textDecoration: 'none', color: '#EFF6E0' }}>
                CatGPT
                <img src={logo} alt="paw" className='header-logo'></img>
            </Link>
        </div>
    )
}

export default ChatHeader;
