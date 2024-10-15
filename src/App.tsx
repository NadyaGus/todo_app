import { type ReactElement, useState } from 'react';

import { AddTodoForm } from './components/form';
import { TodoList } from './components/list';
import { todosList } from './utils/todos-list';

function App(): ReactElement {
  const [list, setList] = useState(todosList);
  const addTodo = (title: string): void => {
    setList([...list, { completed: false, id: list.length + 1, title }]);
  };

  return (
    <div className="App">
      <h1>todos</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList list={list} />
    </div>
  );
}

export default App;
