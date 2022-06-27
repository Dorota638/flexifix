import { gql, useMutation, useQuery } from '@apollo/client';
import { Button, Group, Loader, Select } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { useStore } from '../../../Store';
import { showNotification } from '@mantine/notifications';

const NEW_BICYCLE = gql`
mutation CreateBicycle($color: Int!
    $brand: Int!
    $gearsystem: Int!
    $status: Int!
    $tires: Int!
    $fkOwnerId: String!
    $fkHolderId: String!) {
    createBicycle(input: {color: $color, brand: $brand, gearsystem: $gearsystem, status: $status, tires: $tires, fkOwnerId: $fkOwnerId, fkHolderId: $fkHolderId }) {
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





export default function NewBicycle({ setOpened, data }) {
    const form = useForm({
        initialValues: {

        },
    });

    const { color, tires, status, gearsystem, brand } = data.bicycleProps;
    const colornames = color.map((color) => ({ label: color.color, value: color.id }))
    const tiressize = tires.map((tire) => ({ label: tire.size, value: tire.id }))
    const statusstatus = status.map((status) => ({ label: status.status, value: status.id }))
    const gearsystemtype = gearsystem.map((gearsystem) => ({ label: gearsystem.type, value: gearsystem.id }))
    const brandname = brand.map((brand) => ({ label: brand.name, value: brand.id }))
    const setBicycle = useStore((state) => state.storebicycleProps);
    const customer = useStore((state) => state.selectedCustomer);


    const [createBicycle, { loading }] = useMutation(NEW_BICYCLE);

    if (loading) return <Loader />;



    return (
        <form
            onSubmit={form.onSubmit((values) => {
                console.log("values", values)
                return (
                    createBicycle({
                        variables: {
                            color: values.color,
                            tires: values.size,
                            status: values.status,
                            gearsystem: values.type,
                            brand: values.brandname,
                            fkOwnerId: customer.id,
                            fkHolderId: customer.id,

                        },
                    }).then((data) => {
                        setBicycle(data.createBicycle)
                        setOpened(false)
                        showNotification({
                            title: 'Success',
                            message: "yey",
                            autoClose: 3000,
                            color: 'green',
                        });
                        console.log("data", data);
                    }).catch((error) => { console.log(error); })

                )
            }
            )
            }
        >
            <Select
                label="Choose color"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={colornames}
                {...form.getInputProps('color')}
            />
            <Select
                label="Choose tire size"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={tiressize}
                {...form.getInputProps('size')}
            />
            <Select
                label="Choose status"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={statusstatus}
                {...form.getInputProps('status')}
            />
            <Select
                label="Choose gear system type"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={gearsystemtype}
                {...form.getInputProps('type')}
            />
            <Select
                label="Choose brand name"
                placeholder="Pick one"
                searchable
                nothingFound="No options"
                data={brandname}
                {...form.getInputProps('brandname')}
            />
            <Group position="right" mt="md">
                <Button type="submit">Submit</Button>
            </Group>
        </form >
    );
}
