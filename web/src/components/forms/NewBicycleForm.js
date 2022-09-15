import { useMutation } from "@apollo/client";
import { Button, Group, Loader, Select } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { useStore } from "../../Store";
import { showNotification } from "@mantine/notifications";
import { NEW_BICYCLE } from "../../queries";

export const NewBicycleForm = ({ setOpened }) => {
  const form = useForm({
    initialValues: {},
  });

  const { color, tires, status, gearsystem, brand } = useStore(
    (state) => state.bicycleProps
  );
  console.log('color tires status gearsystem brand',
  color,
  tires,
  status,
  gearsystem,
  brand);
  
  const colornames = color.map((color) => ({
    label: color.value,
    value: color.id,
  }));
  const tiressize = tires.map((tire) => ({ label: tire.size, value: tire.id }));
  const statusstatus = status.map((status) => ({
    label: status.value,
    value: status.id,
  }));
  const gearsystemtype = gearsystem.map((gearsystem) => ({
    label: gearsystem.value,
    value: gearsystem.id,
  }));
  const brandname = brand.map((brand) => ({
    label: brand.value,
    value: brand.id,
  }));
  const setBicycle = useStore((state) => state.storebicycleProps);
  const customer = useStore((state) => state.selectedCustomer);

  const [createBicycle, { loading }] = useMutation(NEW_BICYCLE);

  if (loading) return <Loader />;
  return (
    <form
      onSubmit={form.onSubmit((values) => {
        return createBicycle({
          variables: {
            color: values.color,
            tires: values.size,
            status: values.status,
            gearsystem: values.type,
            brand: values.brandname,
            fkOwnerId: customer.id,
            fkHolderId: customer.id,
          },
        })
          .then((data) => {
            setBicycle(data.createBicycle);
            setOpened(false);
            showNotification({
              title: "Success",
              message: "yey",
              autoClose: 3000,
              color: "green",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })}
    >
      <Select
        label="Choose color"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={colornames}
        {...form.getInputProps("color")}
      />
      <Select
        label="Choose tire size"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={tiressize}
        {...form.getInputProps("size")}
      />
      <Select
        label="Choose status"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={statusstatus}
        {...form.getInputProps("status")}
      />
      <Select
        label="Choose gear system type"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={gearsystemtype}
        {...form.getInputProps("type")}
      />
      <Select
        label="Choose brand name"
        placeholder="Pick one"
        searchable
        nothingFound="No options"
        data={brandname}
        {...form.getInputProps("brandname")}
      />
      <Group position="right" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
};
