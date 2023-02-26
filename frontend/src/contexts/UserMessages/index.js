import React, { useState, createContext } from 'react';

export const UserMessagesContext = createContext();

export const UserMessagesProvider = ({ children }) => {
  const [userMessages, setUserMessages] = useState([]);

  return (
    <UserMessagesContext.Provider value={[userMessages, setUserMessages]}>
      {children}
    </UserMessagesContext.Provider>
  );
};