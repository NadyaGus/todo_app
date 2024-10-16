import { type ReactElement } from 'react';

import { Checkbox, Flex, ListItem } from '@mantine/core';

import classes from './index.module.css';

interface Props {
  todo: {
    completed: boolean;
    id: number;
    title: string;
  };
  toggleTodo: (id: number) => void;
}

export const Item = ({ todo, toggleTodo }: Props): ReactElement => {
  const { completed, id, title } = todo;

  const handleChange = (): void => {
    toggleTodo(id);
  };

  return (
    <ListItem key={todo.id}>
      <Flex align="center" gap="md" justify="space-between">
        <Checkbox
          checked={completed}
          className={completed ? classes.checked : ''}
          fw={'bolder'}
          label={title}
          onChange={handleChange}
          size="md"
        />
      </Flex>
    </ListItem>
  );
};
