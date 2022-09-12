import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@mantine/core";
import { FINISH_REPAIR } from "../../queries";
import { GET_TODO } from "../../queries";

export const FinishRepair = ({ setOpened, repair }) => {
  const [finishRepair] = useMutation(FINISH_REPAIR, {
    refetchQueries: [{ query: GET_TODO }],
  });
  return (
    <Button
      className="mx-2 grow"
      onClick={() => {
        setOpened(false);
        finishRepair({
          variables: {
            id: repair.id,
            status: 4,
            dateFinished: new Date(),
          },
        });
      }}
    >
      Finish Repair
    </Button>
  );
};
