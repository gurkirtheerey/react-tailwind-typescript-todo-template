import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Form from './components/Form';
import Todo from './components/Todo';
import { useDarkMode } from './hooks/useDarkMode';
import TodoType from './types/TodoType';

const App = () => {
  const [text, setText] = useState<string>('')
  const [todos, setTodos] = useState<TodoType[]>([])
  const [colorTheme, setTheme] = useDarkMode()


  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault()
    const todosCopy = [...todos]
    todosCopy.unshift({ text })
    setTodos([...todosCopy])
    setText('')
  }

  const handleDelete = (todo: TodoType) => {
    const todosCopy = [...todos]
    const found = todosCopy.findIndex((t: TodoType) => t.text = todo.text)
    if (found >= 0) {
      todosCopy.splice(found, 1)
      setTodos([...todosCopy])
    }
  }

  return (
    <div className='h-screen flex flex-col items-center dark:bg-gray-800 transform duration-500'>
      <div className='w-full h-1/4 mt-4 flex justify-between items-start p-4'>
        <h1 className='text-center font-bold text-xl dark:text-white'>Todo App</h1>
        <Button mode='primary' name='Dark Mode' onClick={() => setTheme(colorTheme)} />
      </div>
      <Form handleSubmit={handleSubmit} text={text} setText={setText} />
      {todos && todos.length ? (
        <div className='w-1/2 h-1/2 mt-4'>
          {todos.map((todo, i) => <React.Fragment key={i}>
            <Todo todo={todo} handleDelete={handleDelete} />
            </React.Fragment>)}
        </div>) : null}
    </div>
  );
}

export default App;
