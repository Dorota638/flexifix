import { Box, Button, Group, NumberInput, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';

export const NewBicycle = () => {
  const form = useForm({
    initialValues: {
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });
  return (
    <>
      <Box className="ml-20">
        <Title order={3}>Create new bicycle</Title>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput label="Name" required />
          <TextInput label="color" required />
          <TextInput label="brand" />
          <TextInput label="gearsystem" error="" />
          <NumberInput label="status" />
          <NumberInput label="tires" />
          <TextInput label="frameNumber" />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </>
  );
};
