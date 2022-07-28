import { Button, Modal } from "@mantine/core";
import React from "react";
import { NewBicycleForm } from "../forms/NewBicycleForm";

export const CreateBicycle = ({ opened, setOpened }) => {
  return (
    <>
      <Button
        onClick={() => {
          setOpened(true);
        }}
        className="my-10"
      >
        Create Bicycle
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create bicycle"
      >
        <NewBicycleForm setOpened={setOpened} />
      </Modal>
    </>
  );
};
