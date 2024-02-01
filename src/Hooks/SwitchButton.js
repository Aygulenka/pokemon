// SwitchButton.js
import React from "react";
import './Switch.css';
import { useSwitchContext } from './SwithContext';

const SwitchButton = () => {
  const { isChecked, toggleSwitch } = useSwitchContext();

  return (
    <div className='pos' id="uniqueContainer">
      <div className="wrap">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={toggleSwitch} 
        />

        <div className="totoro">
          <div className="ears">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="ear" />
            ))}
          </div>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="arm" />
          ))}
          <div className="foot" />
          <div className="foot two" />
          <div className="body">
            <div className="spots">
              {Array.from({ length: 7 }).map((_, index) => (
                <div key={index} className="spot" />
              ))}
            </div>
            <div className="inner">
              <div className="mouth" />
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="eye" />
              ))}
            </div>
          </div>
        </div>
        {isChecked && <div className="label1">Infinite scroll</div>}
        {!isChecked && <div className="label2">Pagination </div>}
      </div>
    </div>
  );
};

export default SwitchButton;
