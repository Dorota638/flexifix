import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, Loader } from '@mantine/core';
import { PersonIcon } from '@modulz/radix-icons';
import { gql, useQuery } from '@apollo/client';
import { useStore } from '../../Store';

const ADD_BICYCLE_PROPS = gql`
query bicycleProps {
    bicycleProps {
      color {
        id
        color
      }
      tires {
        id
        size
      }
      status {
        id
        status
      }
      gearsystem {
        id
        type
      }
      brand {
        id
        name
      }
    }
  }
`;

export default function NewBicycle({ setOpened }) {
    const form = useForm({
        initialValues: {
        },
    });

    const [createCustomer, { data, loading, error }] = useQuery(ADD_BICYCLE_PROPS);

    const setCustomer = useStore((state) => state.selectCustomer);


    if (loading) return <Loader />;
    if (error) console.error(error);
    if (data && loading === false) {
        setCustomer(data.createCustomer)
        setOpened(false)
    }
    return (
        <Box className="ml-20" sx={{ maxWidth: 300 }} mx="auto">
            <form
                onSubmit={form.onSubmit((values) =>
                    createCustomer({
                        variables: {
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                        },
                    })
                )}
            >
                <TextInput
                    icon={<PersonIcon />}
                    required
                    label="First Name"
                    placeholder="First Name"
                    {...form.getInputProps('firstName')}
                />
                <TextInput
                    required
                    label="Last Name"
                    placeholder="Last Name"
                    {...form.getInputProps('lastName')}
                />
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}
