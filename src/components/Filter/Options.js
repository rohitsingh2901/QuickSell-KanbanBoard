import React, { useState, useEffect, useRef } from 'react';
import './Options.css';
import DisplayOptions from './DisplayOption/DisplayOption';
import SortOptions from './SortOption/SortOption';

const Options = ({ onDisplayModeChange, onSortOptionChange }) => {
  const [dropdownStyle, setDropdownStyle] = useState({
    display: 'none',
  });

  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setDropdownStyle(prevStyle => ({
      display: prevStyle.display === 'none' ? 'block' : 'none',
    }));
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownStyle({ display: 'none' });
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="sort-options">
      <div className="dropdown" ref={dropdownRef}>
        <button className="dropbtn" onClick={handleMouseEnter}>
          <i className="fa-solid fa-sliders" style={{ color: '#68686a' }}></i> Display{' '}
          {dropdownStyle.display === 'none' ? (
            <i className="fa-solid fa-caret-down" style={{ color: '#68686a' }}></i>
          ) : (
            <i className="fa-solid fa-caret-up" style={{ color: '#68686a' }}></i>
          )}
        </button>
        <div className="dropdown-content_option" style={dropdownStyle}>
          <div className="grouping">
            <p>Grouping</p> <DisplayOptions onDisplayModeChange={onDisplayModeChange} />
          </div>
          <div className="grouping">
            <p>Ordering</p> <SortOptions onSortOptionChange={onSortOptionChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
