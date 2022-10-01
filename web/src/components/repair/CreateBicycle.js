import { Button, Modal } from "@mantine/core";
import React from "react";
import { NewBicycleForm } from "../forms/NewBicycleForm";

export const CreateBicycle = ({ openBicycle, setOpenBicycle }) => {
  return (
    <>
      <Button
        onClick={() => {
          setOpenBicycle(true);
        }}
        className="my-10"
      >
        Create Bicycle
      </Button>
      <Modal
        opened={openBicycle}
        onClose={() => setOpenBicycle(false)}
        title="Create bicycle"
      >
        <NewBicycleForm setOpenBicycle={setOpenBicycle} />
      </Modal>
    </>
  );
};
