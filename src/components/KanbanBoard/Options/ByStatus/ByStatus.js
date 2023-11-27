import React from 'react';
import './ByStatus.css'
import UserIcon from './UserIcon';


const ByStatus = ({ tickets, users, displayMode, sortOption }) => {
  const icons = {
    "Backlog" : <i class="fa-solid fa-spinner"></i>,
    "Todo" : <i class="fa-regular fa-circle"></i>,
    "In progress" : <i class="fa-solid fa-circle-half-stroke" style={{"color": "#e6e02d"}}></i>,
    "Done" : <i class="fa-solid fa-circle-check" style={{"color": "#1b52b1"}}></i>,
    "Canceled": <i class="fa-solid fa-ban" style={{"color": "#787878"}}></i>
  };
  const PriorityIcons = {
    "No Priority" : <i class="fa-solid fa-ellipsis" style={{"color": "#66686b"}}></i>,
    "Urgent" : <i class="fa-solid fa-triangle-exclamation" style={{"color": "#ff9500"}}></i>,
    "High": <i class="fa-solid fa-signal" style={{"color": "#00ff04"}}></i>,
    "Medium": <i class="fa-solid fa-signal" style={{"color": "#cf8800"}}></i>,
    "Low" : <i class="fa-solid fa-signal" style={{"color": "#ff0000"}}></i>
  }
  const groupTicketsByStatus = () => {
    let groupedTickets = {
      'Backlog': [],
      'Todo': [],
      'In progress': [],
      'Done': [],
      'Canceled': []
    };

    tickets.forEach((ticket) => {
      if (groupedTickets[ticket.status]) {
        groupedTickets[ticket.status].push(ticket);
      }
    });

    return groupedTickets;
  };

  const sortedTickets = (tickets) => {
    if (sortOption === 'title') {
      tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    else if(sortOption==="priority"){
      tickets.sort((a, b) => a.priority - b.priority);
    }
    return tickets;
  };

  const groupedByStatus = groupTicketsByStatus();

  Object.keys(groupedByStatus).forEach((status) => {
    groupedByStatus[status] = sortedTickets(groupedByStatus[status]);
  });


  const getNameFromUserId = (userId) => {
    const foundUser = users.find(user => user.id === userId);
    return foundUser ? foundUser.name : 'Unknown'; 
  };
  const getAvailableFromUserId = (userId) => {
    const foundUser = users.find(user => user.id === userId);
    return foundUser ? foundUser.available : false; 
  };

  const checkPriority = (priorityNumber)=>{
    if(priorityNumber===0) return PriorityIcons['No Priority'];
    else if(priorityNumber===1) return PriorityIcons['Low'];
    else if(priorityNumber===2) return PriorityIcons['Medium'];
    else if(priorityNumber===3) return PriorityIcons['High'];
    else return PriorityIcons['Urgent'];
  }

  return (
    <div className="ByStatus">
      {Object.keys(groupedByStatus).map((status, index) => (
        <div key={index} className="Bystatus-kanban-column">
          <h3 style={{textAlign:"center"}}>{status in icons ? (icons[status]):('')} {status} {groupedByStatus[status].length}</h3>
          {groupedByStatus[status].map((ticket) => (
            <div key={ticket.id} className="Status-ticket-card">
              <div className='ticketUserIDandDpDiv'>
                <p id='StatustickedId'>{ticket.id}</p>
                <UserIcon name={getNameFromUserId(ticket.userId)} isActive={getAvailableFromUserId(ticket.userId)}/>
              </div>
              <p style={{margin:"0px", marginBottom:"10px"}}>{ticket.title.length>60 ? ticket.title.slice(0,61)+'...' : ticket.title}</p>
              <span style={{fontSize:"small"}}>{checkPriority(ticket.priority)}</span> <span className='StatusticketText'><i class="fa-solid fa-circle fa-2xs" style={{"color": "#757575"}}></i> {ticket.tag[0]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ByStatus;
