import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@mantine/core";

export const FinishRepairButton = ({repair}) => {
  // const [finishRepair] = useMutation(FINISH_REPAIR);
  return (
    <Button
      className="mx-2 grow"
      // onClick={() => {
      //   finishRepair({
      //     variables: {
      //       id: repair.id,
      //     },
      //   });
      // }}
    >
      Finish Repair
    </Button>
  );
};
