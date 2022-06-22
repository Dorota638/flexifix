import { gql, useMutation } from '@apollo/client';
import { Button, Group, Loader } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { useStore } from 'zustand';
import { InputField } from './InputField';

const NEW_BICYCLE = gql`
mutation CreateBicycle($input: createBicycleInput) {
    createBicycle(input: $input) {
      color {
            id
            color
        }
      brand {
            id
            name
        }
      gearsystem {
            id
            type
        }
      status {
            id
            status
        }
      tires {
            id
            size
        }
    }
}`;
export default function NewBicycle() {
    const form = useForm({
        initialValues: {

        },
    });

    const [createBicycle, { data, loading, error }] = useMutation(NEW_BICYCLE);

    // const setBicycle = useStore((state) => state.selectBicycle);


    if (loading) return <Loader />;
    if (error) console.error(error);

    return (
        <form>
            <InputField />
            <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
}
