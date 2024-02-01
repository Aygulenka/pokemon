// SwithContext.js
import React, { createContext, useContext, useState } from 'react';

const SwitchContext = createContext();

export const SwitchProvider = ({ children }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <SwitchContext.Provider value={{ isChecked, toggleSwitch }}>
      {children}
    </SwitchContext.Provider>
  );
};

export const useSwitchContext = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error('useSwitchContext must be used within a SwitchProvider');
  }
  return context;
};
