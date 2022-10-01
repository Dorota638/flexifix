import { Button, Modal } from "@mantine/core";
import React from "react";
import { CustomerForm } from "../forms/CustomerForm";

export const CreateCustomer = ({ openCustomer, setOpenCustomer }) => {
  return (
    <>
      <Button
        onClick={() => {
          setOpenCustomer(true);
        }}
        className="my-10"
      >
        Create customer
      </Button>
      <Modal
        size="md"
        opened={openCustomer}
        onClose={() => setOpenCustomer(false)}
        title="Create customer"
      >
        <CustomerForm setOpenCustomer={setOpenCustomer} />
      </Modal>
    </>
  );
};
