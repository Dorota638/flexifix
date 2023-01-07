import { useMutation } from "@apollo/client";
import { Button } from "@mantine/core";
import React from "react";
import { TAKE_REPAIR } from "../../queries";

export const ReturnRepair = ({ repair }) => {
  const [returnRepair] = useMutation(TAKE_REPAIR);
  return (
    <Button
      className="mx-2 grow"
      onClick={() => {
        returnRepair({
          variables: {
            id: repair.id,
            status: "e8f93e09-851a-4c24-adda-07867725ca81",
            dateReturned: new Date(),
            fkPaymentMethod: 1,
          },
        });
      }}
    >
      Return Repair
    </Button>
  );
};
