import React from 'react';

const generateInitials = (name) => {
  const nameParts = name.split(' ');
  let initials = '';
  if (nameParts.length > 1) {
    initials = nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase();
  } else if (nameParts.length === 1) {
    initials = nameParts[0][0].toUpperCase() + (nameParts[0][1] ? nameParts[0][1].toUpperCase() : '');
  }
  return initials;
};

const UserIcon = ({ name, isActive }) => {
  const initials = generateInitials(name);

  const colors = ['red', 'blue', 'orange', 'black', 'violet', 'darkblue'];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const dotColor = isActive ? 'green' : 'gray';

  return (
    <div
      style={{
        position: 'relative',
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        backgroundColor: randomColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '12px',
      }}
    >
      {initials}
      <div
        style={{
          position: 'absolute',
          bottom: '2px',
          left: '70%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: dotColor,
        }}
      />
    </div>
  );
};

export default UserIcon;
