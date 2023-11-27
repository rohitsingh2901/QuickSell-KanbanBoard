import React, { useState, useEffect, useRef } from 'react';
import './SortOption.css';

const SortOptions = ({ onSortOptionChange }) => {
  const [option, setOption] = useState('Select');
  const [dropdownStyle, setDropdownStyle] = useState({
    display: 'none',
  });

  const dropdownRef = useRef(null);

  const handleSortChange = (selectedOption) => {
    setOption(selectedOption[0].toUpperCase() + selectedOption.slice(1));
    setDropdownStyle({ display: 'none' });
    onSortOptionChange(selectedOption);
  };

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
    <div className="sort-option">
      <div className="dropdown" onClick={handleMouseEnter} ref={dropdownRef}>
        <p className="SortOptionDropBtn">
          {option}{' '}
          {dropdownStyle.display === 'none' ? (
            <i className="fa-solid fa-caret-down" style={{ color: '#68686a' }}></i>
          ) : (
            <i className="fa-solid fa-caret-up" style={{ color: '#68686a' }}></i>
          )}
        </p>
        <div className="dropdown-content" style={dropdownStyle}>
          <p onClick={() => handleSortChange('priority')}>By Priority</p>
          <p onClick={() => handleSortChange('title')}>By Title</p>
        </div>
      </div>
    </div>
  );
};

export default SortOptions;
