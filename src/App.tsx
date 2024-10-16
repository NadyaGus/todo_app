import { type ReactElement, useCallback, useState } from 'react';

import { Container, Flex, Paper, Title } from '@mantine/core';

import type { Todo } from './types/todo';

import { AddTodoForm } from './components/form';
import { TodoList } from './components/list';
import { Navigation } from './components/navigation';
import { todosList } from './utils/todos-list';

function App(): ReactElement {
  const [list, setList] = useState<Todo[]>(todosList);
  const [filter, setFilter] = useState<'active' | 'all' | 'completed'>('all');

  const addTodo = (title: string): void => {
    setList([...list, { completed: false, id: list.length + 1, title }]);
  };

  const filterTodo = useCallback(
    (filter: 'active' | 'all' | 'completed'): Todo[] => {
      switch (filter) {
        case 'active':
          return list.filter((todo) => !todo.completed);
        case 'completed':
          return list.filter((todo) => todo.completed);
        default:
          return list;
      }
    },
    [list],
  );
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
      <Container maw={800} miw={320}>
        <Title fw={300} my={40} order={1} size={60} ta={'center'}>
          todos
        </Title>
        <Paper my={40} p={40} radius={20} withBorder>
          <Flex direction={'column'} gap={40}>
            <AddTodoForm addTodo={addTodo} />
            <TodoList list={filterTodo(filter)} toggleTodo={toggleTodo} />
            <Navigation
              deleteCompleted={deleteCompleted}
              filterTodo={setFilter}
              tasksCount={filterTodo('active').length}
            />
          </Flex>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
