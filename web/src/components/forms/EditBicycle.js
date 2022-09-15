import { useMutation } from '@apollo/client';
import { Button, Group, Loader, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import React from 'react'
import { useStore } from '../../Store';
import { EDIT_BICYCLE } from "../../queries";

export const EditBicycle = ({ bicycle, setOpened }) => {
  const [editBicycle, { data, loading, error }] = useMutation(EDIT_BICYCLE);

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
    value: color.id
  }));
  const tiressize = tires.map((tire) => ({
    label: tire.value,
    value: tire.id
  }));
  const statusstatus = status.map((status) => ({
    label: status.value,
    value: status.id
  }));
  const gearsystemtype = gearsystem.map((gearsystem) => ({
    label: gearsystem.value,
    value: gearsystem.id
  }));
  const brandname = brand.map((brand) => ({
    label: brand.value,
    value: brand.id
  }));

  const form = useForm({
    initialValues: {
      name: bicycle ? bicycle.name : '',
      type: bicycle ? bicycle.type : '',
      brand: bicycle ? bicycle.brand.id : '',
      color: bicycle ? bicycle.color.id : '',
      gearsystem: bicycle ? bicycle.gearsystem.id : '',
      tires: bicycle ? bicycle.tires.id : '',
      status: bicycle ? bicycle.status.id : '',
      frameNumber: bicycle ? bicycle.frameNumber : '',
      owner: bicycle ? bicycle.owner.id : '',
      holder: bicycle ? bicycle.holder.id : '',

    },
  });

  if (loading) return <Loader />;
  if (error) console.error(error);

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log("values.bicycleType", values.bicycleType);
          setOpened(false);
          return editBicycle({
            variables: {
              id: bicycle ? bicycle.id : null,
              name: values.name,
              brand: values.brand,
              type: values.type,
              color: values.color,
              gearsystem: values.gearsystem,
              tires: values.tires,
              status: values.status,
              frameNumber: values.frameNumber,
              // fkOwnerId: values.bicycleOwner,
              // fkHolderId: values.bicycleHolder,
            },
          });
        })}
      >
        <TextInput
          label="Name"
          placeholder="Name"
          value={bicycle?.name}
          {...form.getInputProps("name")}
        />
        <Select
          label="Brand"
          searchable
          nothingFound="No options"
          value={bicycle?.brand.id}
          data={brandname}
          {...form.getInputProps("brand")}
        />
        <TextInput
          label="Type"
          placeholder="Type"
          value={bicycle?.type}
          {...form.getInputProps("type")}
        />
        <Select
          label="Color"
          searchable
          nothingFound="No options"
          value={bicycle?.color.id}
          data={colornames}
          {...form.getInputProps("color")}
        />
        <Select
          label="Tire size"
          searchable
          nothingFound="No options"
          value={bicycle?.tires.id}
          data={tiressize}
          {...form.getInputProps("tires")}
        />
        <Select
          label="Status"
          nothingFound="No options"
          value={bicycle?.status.id}
          data={statusstatus}
          {...form.getInputProps("status")}
        />
        <Select
          label="Gearsystem"
          placeholder="Pick"
          searchable
          nothingFound="No options"
          value={bicycle?.gearsystem.id}
          data={gearsystemtype}
          {...form.getInputProps("gearsystem")}
        />
        <TextInput
          label="Frame number"
          placeholder="WA726398FD"
          value={bicycle?.frameNumber}
          {...form.getInputProps("frameNumber")}
        />
        <TextInput
          label="Owner"
          value={bicycle?.owner.fullName}
        // {...form.getInputProps("owner")}
        />
        <TextInput
          label="Holder"
          value={bicycle?.holder.fullName}
        // {...form.getInputProps("holder")}
        />
        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </>
  );
};
