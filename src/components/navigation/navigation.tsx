import type { ReactElement } from 'react';

import { Button, Flex, Tabs, Text } from '@mantine/core';

export const Navigation = ({
  deleteCompleted,
  filterTodo,
  tasksCount,
}: {
  deleteCompleted: () => void;
  filterTodo: (filter: 'active' | 'all' | 'completed') => void;
  tasksCount: number;
}): ReactElement => {
  return (
    <Flex align="center" justify="space-between">
      <Text>{`Осталось задач: ${tasksCount}`}</Text>
      <Tabs defaultValue="all" variant="outline">
        <Tabs.List justify="center">
          <Tabs.Tab onClick={() => filterTodo('all')} value="all">
            Все
          </Tabs.Tab>
          <Tabs.Tab onClick={() => filterTodo('active')} value="active">
            Активные
          </Tabs.Tab>
          <Tabs.Tab onClick={() => filterTodo('completed')} value="completed">
            Завершенные
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <Button onClick={() => deleteCompleted()} variant="outline">
        Удалить завершенные
      </Button>
    </Flex>
  );
};
