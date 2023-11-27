import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';
import Options from './components/Filter/Options';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [displayMode, setDisplayMode] = useState('status'); 
  const [sortOption, setSortOption] = useState('priority'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketResponse = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const ticketData = await ticketResponse.json();
        setTickets(ticketData.tickets);

        const usersResponse = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const userData = await usersResponse.json();
        setUsers(userData.users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
  };

  const handleSortOptionChange = (option) => {
    setSortOption(option);
  };

  return (
    <div className="App">
      <Options onDisplayModeChange={handleDisplayModeChange} onSortOptionChange={handleSortOptionChange} />
      <KanbanBoard
        tickets={tickets}
        users={users}
        displayMode={displayMode}
        sortOption={sortOption}
      />
    </div>
  );
};

export default App;
