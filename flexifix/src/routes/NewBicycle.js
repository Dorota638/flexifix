import { Box, Button, Group, NumberInput, TextInput, Title } from '@mantine/core';
import { PersonIcon, EnvelopeClosedIcon } from '@modulz/radix-icons';
import { useForm } from '@mantine/form';

export const NewBicycleForm = () => {

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
            <Title order={3}>Create new bicycle</Title>
            <Box>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput label="Name" required />
                    <TextInput label="color" required />
                    <TextInput label="brand" />
                    <TextInput label="gearsystem" error="" />
                    <NumberInput label="status" />
                    <NumberInput label="tires" />
                    <TextInput label="frameNumber" />
                    <Group position="right" mt="md">
                        <Button type="submit" >Submit</Button>
                    </Group>
                </form>
            </Box>
        </>
    );
};
