import type { ReactElement } from 'react';

import { Button } from '@mantine/core';

import { TodoList } from './components/list';
import { todosList } from './utils/todos-list';

function App(): ReactElement {
  return (
    <div className="App">
      <h1>todos</h1>
      <TodoList list={todosList} />
      <Button>Button</Button>
    </div>
  );
}

export default App;
