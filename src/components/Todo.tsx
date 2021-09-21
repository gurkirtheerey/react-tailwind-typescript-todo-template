import React from 'react'
import { TodoProps } from '../types/TodoProps';

const Todo: React.FC<TodoProps> = ({ todo, handleDelete }) => {
  return (
    <div className='bg-gray-400 m-2 flex justify-between items-center p-4 rounded font-bold dark:bg-gray-900 dark:text-white'>
      <span className='capitalize'>{todo.text}</span>
      <button className='text-white text-xl' onClick={() => handleDelete(todo)}>x</button>
    </div>
  );
}

export default Todo
