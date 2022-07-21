import { Modal } from "@mantine/core";
import React from "react";
import { NewBicycleForm } from "../forms/NewBicycleForm";

export const CreateBicycle = ({ opened, setOpened }) => {
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create bicycle"
    >
      <NewBicycleForm setOpened={setOpened} />
    </Modal>
  );
};