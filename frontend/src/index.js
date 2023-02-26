import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserMessagesProvider } from './contexts/UserMessages';
import { CatMessagesProvider } from './contexts/CatMessages';
import { JointMessagesProvider } from './contexts/JointMessages';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <JointMessagesProvider>
    <CatMessagesProvider>
      <UserMessagesProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserMessagesProvider>
    </CatMessagesProvider>
  </JointMessagesProvider>
);
