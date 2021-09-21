import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Todo App/i);
  expect(linkElement).toBeInTheDocument();
});

test('add a todo', async () => {
  const { findByText, findByPlaceholderText } = render(<App />)
  const btn = await findByText('Submit')
  expect(btn).toBeDisabled()
  const input = await findByPlaceholderText('Enter')
  fireEvent.change(input, { target: { value: 'test' } })
  expect(btn).not.toBeDisabled()
  fireEvent.click(btn)
  const text = await findByText('test')
  expect(text).toBeInTheDocument()
  expect(btn).toBeDisabled()
})

test('delete a todo', async () => {
  const { findByText, findByPlaceholderText } = render(<App />)
  const input = await findByPlaceholderText('Enter')
  fireEvent.change(input, { target: { value: 'test' } })
  fireEvent.click(await findByText('Submit'))
  const deleteBtn = await findByText('x')
  const text = await findByText('test')
  expect(deleteBtn).toBeInTheDocument()
  fireEvent.click(deleteBtn)
  expect(text).not.toBeInTheDocument()
})