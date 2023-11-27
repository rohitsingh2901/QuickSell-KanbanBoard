import React from 'react';
import ByPriority from './Options/ByPriority/ByPriority';
import ByUser from './Options/ByUser/ByUser';
import ByStatus from './Options/ByStatus/ByStatus';
import './KanbanBoard.css'

const KanbanBoard = ({ tickets, users, displayMode, sortOption }) => {
  

  return (
    <div className="kanban-board">
      {
        displayMode==="priority" && (<ByPriority tickets={tickets} users={users} sortOption={sortOption}/>)
      }
      {
        displayMode==="user" && (<ByUser tickets={tickets} users={users} sortOption={sortOption} />)
      }
      {
        displayMode==="status" && (<ByStatus tickets={tickets} users={users} sortOption={sortOption}/>)
      }
    </div>
  );
};

export default KanbanBoard;
