import { useMutation } from '@apollo/client';
import { Button, Group, Loader, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { useStore } from '../../Store';
import { showNotification } from '@mantine/notifications';
import { GET_BICYCLES, NEW_BICYCLE } from '../../queries';

export const NewBicycleForm = ({ setOpenBicycle }) => {
  const form = useForm({
    initialValues: {},
  });

  const { color, tires, status, gearsystem, brand } = useStore((state) => state.bicycleProps);

  const colornames = color.map((color) => ({
    label: color.value,
    value: color.id,
  }));
  const tiressize = tires.map((tire) => ({ label: tire.value, value: tire.id }));
  const statusstatus = status.map((status) => ({
    label: status.value,
    value: status.id,
  }));
  const gearSystem = gearsystem.map((gearsystem) => ({
    label: gearsystem.value,
    value: gearsystem.id,
  }));
  const brandname = brand.map((brand) => ({
    label: brand.value,
    value: brand.id,
  }));
  const selectBicycle = useStore((state) => state.selectBicycle);
  const customer = useStore((state) => state.selectedCustomer);

  const [createBicycle, { data, loading, error }] = useMutation(NEW_BICYCLE, {
    refetchQueries: [{ query: GET_BICYCLES, variables: { customerId: customer?.id } }],
  });

  if (loading) return <Loader />;
  if (error) console.error(error);
  if (data && loading === false) {
    selectBicycle(data.createBicycle);
    setOpenBicycle(false);
  }
  return (
    <form
      onSubmit={form.onSubmit((values) =>
        createBicycle({
          variables: {
            color: values.color,
            tires: values.size,
            status: values.status,
            gearsystem: values.gearsystem,
            brand: values.brandname,
            type: values.type,
            frameNumber: values.frameNumber,
            fkOwnerId: customer ? customer.id : 'c6389cef-b019-4b77-b0f7-44f68aebf155',
            fkHolderId: customer ? customer.id : 'c6389cef-b019-4b77-b0f7-44f68aebf155',
          },
        })
          .then((data) => {
            selectBicycle(data.createBicycle);
            setOpenBicycle(false);
            showNotification({
              title: 'Success',
              message: 'yey',
              autoClose: 3000,
              color: 'green',
            });
          })
          .catch((error) => {
            console.log(error);
          })
      )}
    >
      <TextInput label="FrameNumber" {...form.getInputProps('frameNumber')} />
      <Select
        label="Brand name"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={brandname}
        {...form.getInputProps('brandname')}
      />
      <TextInput label="Type" {...form.getInputProps('type')} />
      <Select
        label="Color"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={colornames}
        {...form.getInputProps('color')}
      />
      <Select
        label="Tire size"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={tiressize}
        {...form.getInputProps('size')}
      />
      <Select
        label="Gear system"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={gearSystem}
        {...form.getInputProps('gearsystem')}
      />
      <Select
        label="Status"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={statusstatus}
        {...form.getInputProps('status')}
      />
      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};
