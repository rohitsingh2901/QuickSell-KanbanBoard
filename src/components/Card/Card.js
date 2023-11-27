import React from 'react';

const Card = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <h4>{ticket.title}</h4>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default Card;
