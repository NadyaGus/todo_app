import type { ReactElement } from 'react';

import { Button, Container, TextInput } from '@mantine/core';
import { Form, useForm } from '@mantine/form';

import classes from './index.module.css';

export const AddTodoForm = ({ addTodo }: { addTodo: (title: string) => void }): ReactElement => {
  const form = useForm({
    initialValues: {
      title: '',
    },
    validate: {
      title: (value) => (value ? null : 'Название задачи обязательно'),
    },
  });

  const handleFormSubmit = (values: { title: string }): void => {
    addTodo(values.title);
    form.reset();
  };

  return (
    <Container my={'auto'}>
      <Form className={classes.form} form={form} onSubmit={(values) => handleFormSubmit(values)}>
        <TextInput placeholder="Название задачи" {...form.getInputProps('title')} flex={1} />
        <Button type="submit">Добавить задачу</Button>
      </Form>
    </Container>
  );
};
