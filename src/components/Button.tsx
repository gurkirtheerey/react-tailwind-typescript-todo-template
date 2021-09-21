import React from 'react'
import { ButtonProps } from '../types/ButtonProps'

type Props = React.ComponentProps<'button'> & ButtonProps

const Button: React.FC<Props> = ({ name, onClick, disabled, type, mode }) => {
  return (
    <button className={`p-2 mx-2 rounded bg-${mode === 'primary' ? 'blue-500' : 'purple-500'} text-white ${disabled && 'opacity-50'} transition duration-200`} type={type} disabled={disabled} onClick={onClick}>
    {name}
      </button>
  )
}

export default Button
