import React from 'react';

type TodoFilterProps = {
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  currentFilter: 'all' | 'active' | 'completed';
};

const TodoFilter: React.FC<TodoFilterProps> = ({ setFilter, currentFilter }) => (
  <div>
    <button onClick={() => setFilter('all')} disabled={currentFilter === 'all'}>All</button>
    <button onClick={() => setFilter('active')} disabled={currentFilter === 'active'}>Active</button>
    <button onClick={() => setFilter('completed')} disabled={currentFilter === 'completed'}>Completed</button>
  </div>
);

export default TodoFilter;
