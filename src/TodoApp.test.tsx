import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp';

test('adds a new todo item', () => {
  render(<TodoApp />);
  
  const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(inputElement, { target: { value: 'Test new todo' } });
  fireEvent.submit(inputElement);

  expect(screen.getByText('Test new todo')).toBeInTheDocument();
});
