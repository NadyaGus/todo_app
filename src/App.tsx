import type { ReactElement } from 'react';

import { AddTodoForm } from './components/form';
import { TodoList } from './components/list';
import { todosList } from './utils/todos-list';

function App(): ReactElement {
  return (
    <div className="App">
      <h1>todos</h1>
      <AddTodoForm />
      <TodoList list={todosList} />
    </div>
  );
}

export default App;
