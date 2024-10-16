import { type ReactElement } from 'react';

import { List } from '@mantine/core';

import type { Todo } from '../../types/todo';

import { Item } from '../item';

export const TodoList = ({ list, toggleTodo }: { list: Todo[]; toggleTodo: (id: number) => void }): ReactElement => {
  let tasksCount = 0;

  if (list.length === 0) {
    return (
      <div className="todo-list">
        <span className="todo-list__empty">Список задач пуст</span>
      </div>
    );
  }

  return (
    <List listStyleType="none">
      {list.map((todo) => (
        <Item
          key={tasksCount++}
          todo={todo}
          toggleTodo={() => {
            toggleTodo(todo.id);
          }}
        />
      ))}
    </List>
  );
};
