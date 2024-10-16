import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from '../App';
import { render } from '../test/utils/render';

test('List should be rendered', () => {
  render(<App />);

  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
  expect(true).toBeTruthy();
});

test('Should show fallback text when list is empty', async () => {
  render(<App />);

  const emptyCheckboxes = screen
    .getAllByRole('checkbox')
    .filter((checkbox) => checkbox.getAttribute('checked') === null);
  expect(emptyCheckboxes.length).toBe(2);

  await user.click(emptyCheckboxes[0]);
  await user.click(emptyCheckboxes[1]);

  await user.click(screen.getByText('Удалить завершенные'));

  expect(screen.getByText('Список задач пуст')).toBeInTheDocument();
});
