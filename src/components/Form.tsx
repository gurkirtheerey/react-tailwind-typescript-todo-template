import React from 'react'
import { FormProps } from '../types/FormProps'
import Button from './Button'

const Form: React.FC<FormProps> = ({ handleSubmit, text, setText }) => {
  return (
    <form className='w-full flex justify-center' onSubmit={(e) => handleSubmit(e)}>
      <input
        className='p-2 w-1/2 bg-gray-600 text-white dark:text-gray-800 placeholder-white dark:placeholder-black rounded font-semibold'
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter"
      />
      <Button name='Submit' type='submit' disabled={!text} mode='secondary' />
    </form>
  )
}

export default Form
