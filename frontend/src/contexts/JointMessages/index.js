import React, { useState, createContext } from 'react';

export const JointMessagesContext = createContext();

export const JointMessagesProvider = ({ children }) => {
  const [jointMessages, setJointMessages] = useState([]);

  return (
    <JointMessagesContext.Provider value={[jointMessages, setJointMessages]}>
      {children}
    </JointMessagesContext.Provider>
  );
};