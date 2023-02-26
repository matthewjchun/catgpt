import React, { useState, createContext } from 'react';

export const CatMessagesContext = createContext();

export const CatMessagesProvider = ({ children }) => {
  const [catMessages, setCatMessages] = useState([]);

  return (
    <CatMessagesContext.Provider value={[catMessages, setCatMessages]}>
      {children}
    </CatMessagesContext.Provider>
  );
};