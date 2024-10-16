import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from '../App';
import { render } from '../test/utils/render';

test('Renders the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});

test('Should add a todo', async () => {
  render(<App />);
  expect(true).toBeTruthy();

  const input = document.querySelector('input')!;
  await user.type(input, 'Test todo');
  expect(input.value).toBe('Test todo');

  const button = screen.getByText('Добавить задачу');
  await user.click(button);
  expect(input.value).toBe('');

  expect(screen.getByText('Test todo')).toBeInTheDocument();
});

test('Should remove a todo', async () => {
  render(<App />);
  expect(true).toBeTruthy();

  const checkedTodo = screen.getByText('Todo 2');
  expect(checkedTodo).toBeInTheDocument();

  await user.click(screen.getByText('Удалить завершенные'));
  expect(checkedTodo).not.toBeInTheDocument();
});
