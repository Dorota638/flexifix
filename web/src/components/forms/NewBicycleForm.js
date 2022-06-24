import { gql, useMutation } from '@apollo/client';
import { Button, Group, Loader } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { InputField } from './InputField';
import { useStore } from '../../Store';

const NEW_BICYCLE = gql`
mutation CreateBicycle($input: createBicycleInput) {
    createBicycle(input: {color: $color}) {
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
export default function NewBicycle({ setOpened }) {
    const form = useForm({
        initialValues: {

        },
    });
    const setBicycle = useStore((state) => state.storebicycleProps);

    const [createBicycle, { loading }] = useMutation(NEW_BICYCLE);

    if (loading) return <Loader />;



    return (
        <form
            onSubmit={form.onSubmit((values) =>
                createBicycle({
                    variables: {
                        color: values.color,
                        tires: values.size,
                        status: values.status,
                        gearsystem: values.type,
                        brand: values.brandname
                    },
                }).then((data) => {
                    setBicycle(data.createBicycle)
                    setOpened(false)
                    showNotification({
                        title: 'Success',
                        message: data,
                        autoClose: 3000,
                        color: 'green',
                    });
                }).catch((error) => { console.log(error); })
            )}
        >
            <InputField />
            <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form>
    );
}
