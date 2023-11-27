import React, { useState, useEffect, useRef } from "react";
import "./DisplayOption.css";

const DisplayOptions = ({ onDisplayModeChange }) => {
  const [option, setOption] = useState('Select');
  const [dropdownStyle, setDropdownStyle] = useState({
    display: 'none',
  });
  const dropdownRef = useRef(null);

  const handleDisplayChange = (mode) => {
    setOption(mode[0].toUpperCase() + mode.slice(1));
    setDropdownStyle({ display: 'none' });
    onDisplayModeChange(mode);
  };

  const handleToggleDropdown = () => {
    setDropdownStyle((prevStyle) => ({
      display: prevStyle.display === 'none' ? 'block' : 'none',
    }));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownStyle({ display: 'none' });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="display-option">
      <div className="dropdown" onClick={handleToggleDropdown} ref={dropdownRef}>
        <p className="DisplayOptionDropBtn">
          {option} {dropdownStyle.display === 'none' ? (
            <i className="fa-solid fa-caret-down" style={{ color: '#68686a' }}></i>
          ) : (
            <i className="fa-solid fa-caret-up" style={{ color: '#68686a' }}></i>
          )}
        </p>
        <div className="dropdown-content" style={dropdownStyle}>
          <p onClick={() => handleDisplayChange("status")}>By Status</p>
          <p onClick={() => handleDisplayChange("user")}>By User</p>
          <p onClick={() => handleDisplayChange("priority")}>By Priority</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayOptions;
