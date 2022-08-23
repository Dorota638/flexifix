import { Button, Modal } from "@mantine/core";
import React from "react";
import { CustomerForm } from "../forms/CustomerForm";

export const CreateCustomer = ({ opened, setOpened }) => {
  return (
    <>
      <Button
        onClick={() => {
          setOpened(true);
        }}
        className="my-10"
      >
        Create customer
      </Button>
      <Modal
        size="md"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create customer"
      >
        <CustomerForm setOpened={setOpened} />
      </Modal>
    </>
  );
};
