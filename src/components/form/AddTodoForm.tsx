import type { ReactElement } from 'react';

import { Button, Container, TextInput } from '@mantine/core';
import { Form, useForm } from '@mantine/form';

import classes from './index.module.css';

export const AddTodoForm = (): ReactElement => {
  const form = useForm({
    initialValues: {
      title: '',
    },
    mode: 'uncontrolled',
    validate: {
      title: (value) => (value ? null : 'Название задачи обязательно'),
    },
  });

  const handleFormSubmit = (values: { title: string }): void => {
    console.log(values);
    form.reset();
  };

  return (
    <Container my={'auto'}>
      <Form className={classes.form} form={form} onSubmit={(values) => handleFormSubmit(values)}>
        <TextInput key={form.values.title} placeholder="Название задачи" {...form.getInputProps('title')} flex={1} />
        <Button type="submit">Добавить задачу</Button>
      </Form>
    </Container>
  );
};
