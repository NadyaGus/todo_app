import type { ReactElement } from 'react';

import { List } from '@mantine/core';

import type { Todo } from '../../types/todo';

import { Item } from '../item';

export const TodoList = ({ list }: { list: Todo[] }): ReactElement => {
  return (
    <List listStyleType="none" m="md">
      {list.map((todo) => (
        <Item
          key={todo.id}
          todo={todo}
          toggleTodo={() => {
            console.log(`Toggle ${todo.title}`);
          }}
        />
      ))}
    </List>
  );
};
