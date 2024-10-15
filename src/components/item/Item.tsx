import { type ReactElement, useState } from 'react';

import { Checkbox, Flex, ListItem } from '@mantine/core';

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

  const [checked, setChecked] = useState(completed);

  const handleChange = (): void => {
    setChecked(!checked);
    toggleTodo(id);
  };

  return (
    <ListItem key={todo.id}>
      <Flex align="center" gap="md" justify="space-between">
        <Checkbox checked={checked} fw={'bolder'} label={title} onChange={handleChange} size="md" />
      </Flex>
    </ListItem>
  );
};
