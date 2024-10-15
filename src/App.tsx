import { type ReactElement, useState } from 'react';

import { Container } from '@mantine/core';

import type { Todo } from './types/todo';

import { AddTodoForm } from './components/form';
import { TodoList } from './components/list';
import { Navigation } from './components/navigation/navigation';
import { todosList } from './utils/todos-list';

function App(): ReactElement {
  const [list, setList] = useState<Todo[]>(todosList);
  const [filter, setFilter] = useState<'active' | 'all' | 'completed'>('all');

  const addTodo = (title: string): void => {
    setList([...list, { completed: false, id: list.length + 1, title }]);
  };

  const filterTodo = (filter: 'active' | 'all' | 'completed'): Todo[] => {
    switch (filter) {
      case 'active':
        return list.filter((todo) => !todo.completed);
      case 'completed':
        return list.filter((todo) => todo.completed);
      default:
        return list;
    }
  };

  const toggleTodo = (id: number): void => {
    setList(
      list.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      }),
    );
  };

  const deleteCompleted = (): void => {
    setList(list.filter((todo) => !todo.completed));
  };

  return (
    <div className="App">
      <Container maw={800}>
        <h1>todos</h1>
        <AddTodoForm addTodo={addTodo} />
        <TodoList list={filterTodo(filter)} toggleTodo={toggleTodo} />
        <Navigation deleteCompleted={deleteCompleted} filterTodo={setFilter} tasksCount={filterTodo('active').length} />
      </Container>
    </div>
  );
}

export default App;
