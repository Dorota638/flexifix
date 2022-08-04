import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@mantine/core";

// const FINISH_REPAIR = "gql``";

export const EditRepairButton = ({ setOpened, repair }) => {
  // const [finishRepair] = useMutation(FINISH_REPAIR);
  return (
    <Button
      className="mx-2 grow"
      onClick={() => {
        setOpened(false);
        // finishRepair({
        //   variables: {
        //     id: repair.id,
        //   },
        // });
      }}
    >
      Finish Repair
    </Button>
  );
};
