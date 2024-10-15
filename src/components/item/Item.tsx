import { type ReactElement, useState } from 'react';

import { Checkbox, Flex, ListItem, Title } from '@mantine/core';

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
    <ListItem key={todo.id} m="md">
      <Flex align="center" gap="md" justify="space-between">
        <Checkbox checked={checked} onChange={handleChange} />
        <Title order={3}>{title}</Title>
      </Flex>
    </ListItem>
  );
};
