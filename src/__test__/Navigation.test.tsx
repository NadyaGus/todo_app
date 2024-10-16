import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from '../App';
import { render } from '../test/utils/render';

test('Should display active todos', () => {
  render(<App />);
  expect(screen.getByText('Осталось задач: 2')).toBeInTheDocument();
});

test('Should display correct number of active todos', async () => {
  render(<App />);
  expect(screen.getByText('Осталось задач: 2')).toBeInTheDocument();

  const input = document.querySelector('input')!;
  await user.type(input, 'Test todo');
  expect(input.value).toBe('Test todo');

  const button = screen.getByText('Добавить задачу');
  await user.click(button);

  expect(screen.getByText('Осталось задач: 3')).toBeInTheDocument();
});

test('Should display all todos', async () => {
  render(<App />);

  const length = screen.getAllByRole('checkbox').length;
  expect(length === 3).toBe(true);

  await user.click(screen.getByText('Активные'));
  const length2 = screen.getAllByRole('checkbox').length;
  expect(length2 === 2).toBe(true);

  await user.click(screen.getByText('Все'));
  expect(length === 3).toBe(true);
});

test('Should display only active todos', async () => {
  render(<App />);

  await user.click(screen.getByText('Активные'));

  const length = screen.getAllByRole('checkbox').length;
  expect(length === 2).toBe(true);
});

test('Should display only completed todos', async () => {
  render(<App />);

  await user.click(screen.getByText('Завершенные'));

  const length = screen.getAllByRole('checkbox').length;
  expect(length === 1).toBe(true);
});
