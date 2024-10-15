import '@testing-library/jest-dom';

import App from '../App';
import { render } from '../test/utils/render';

test('Renders the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
