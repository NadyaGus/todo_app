import type { ReactElement } from 'react';

import { List } from '@mantine/core';

import type { Todo } from '../../types/todo';

import { Item } from '../item';

export const TodoList = ({ list, toggleTodo }: { list: Todo[]; toggleTodo: (id: number) => void }): ReactElement => {
  return (
    <List listStyleType="none" m="md">
      {list.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          toggleTodo={() => {
            toggleTodo(todo.id);
          }}
        />
      ))}
    </List>
  );
};
