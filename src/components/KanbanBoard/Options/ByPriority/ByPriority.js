import React from 'react';
import './ByPriority.css'
import UserIcon from '../ByStatus/UserIcon';


const ByPriority = ({ tickets,users, sortOption }) => {
  const icons = {
    "No Priority" : <i class="fa-solid fa-ellipsis" style={{"color": "#66686b"}}></i>,
    "Urgent" : <i class="fa-solid fa-triangle-exclamation" style={{"color": "#ff9500"}}></i>,
    "High": <i class="fa-solid fa-signal" style={{"color": "#00ff04"}}></i>,
    "Medium": <i class="fa-solid fa-signal" style={{"color": "#cf8800"}}></i>,
    "Low" : <i class="fa-solid fa-signal" style={{"color": "#ff0000"}}></i>
  }
  const StatusIcons = {
    "Backlog" : <i class="fa-solid fa-spinner"></i>,
    "Todo" : <i class="fa-regular fa-circle"></i>,
    "In progress" : <i class="fa-solid fa-circle-half-stroke" style={{"color": "#e6e02d"}}></i>,
    "Done" : <i class="fa-solid fa-circle-check" style={{"color": "#1b52b1"}}></i>,
    "Canceled": <i class="fa-solid fa-ban" style={{"color": "#787878"}}></i>
  };
  const groupTicketsByPriority = () => {
    let groupedTickets = {
      'No Priority': [],
      'Urgent': [],
      'High': [],
      'Medium': [],
      'Low': []
    };

    tickets.forEach((ticket) => {
      if (ticket.priority === 0) {
        groupedTickets['No Priority'].push(ticket);
      } else if (ticket.priority === 4) {
        groupedTickets['Urgent'].push(ticket);
      } else if (ticket.priority === 3) {
        groupedTickets['High'].push(ticket);
      } else if (ticket.priority === 2) {
        groupedTickets['Medium'].push(ticket);
      } else if (ticket.priority === 1) {
        groupedTickets['Low'].push(ticket);
      }
    });

    return groupedTickets;
  };

  const sortedTickets = (tickets) => {
    if (sortOption === 'priority') {
      tickets.sort((a, b) => a.priority - b.priority);
    } else if (sortOption === 'title') {
      tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedByPriority = groupTicketsByPriority();

  Object.keys(groupedByPriority).forEach((priority) => {
    groupedByPriority[priority] = sortedTickets(groupedByPriority[priority]);
  });


  const getNameFromUserId = (userId) => {
    const foundUser = users.find(user => user.id === userId);
    return foundUser ? foundUser.name : 'Unknown'; 
  };
  const getAvailableFromUserId = (userId) => {
    const foundUser = users.find(user => user.id === userId);
    return foundUser ? foundUser.available : false; 
  };


  return (
    <div className="ByPriority" style={{ display: "flex" }}>
      {Object.keys(groupedByPriority).map((priority, index) => (
        <div key={index} className="ByPriority-kanban-column">
          <h3 style={{textAlign:"center"}}>{priority in icons ? (icons[priority]):('')} {priority} {groupedByPriority[priority].length}</h3>
          {groupedByPriority[priority].map((ticket) => (
            <div key={ticket.id} className="Priority-ticket-card">
              <div className='PriorityTicketUserIDandDpDiv'>
              <p id='PriorityTickedId'>{ticket.id}</p>
              <UserIcon name={getNameFromUserId(ticket.userId)} isActive={getAvailableFromUserId(ticket.userId)}/>
              </div>
              <p style={{margin:"0px", marginBottom:"10px"}}>{ticket.status in StatusIcons ? (StatusIcons[ticket.status]):('')} {ticket.title.length>60 ? ticket.title.slice(0,61)+'...' : ticket.title}</p>
              <span className='PriorityticketText'><i class="fa-solid fa-circle fa-2xs" style={{"color": "#757575"}}></i> {ticket.tag[0]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ByPriority;
