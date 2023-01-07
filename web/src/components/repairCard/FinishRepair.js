import React from "react";
import { useMutation } from "@apollo/client";
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
            status: "0c3abf0e-a548-445b-8323-e3f580d54a84",
            dateFinished: new Date(),
          },
        });
      }}
    >
      Finish Repair
    </Button>
  );
};
