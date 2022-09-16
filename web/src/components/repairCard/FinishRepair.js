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
            status: "337a9aaa-8839-45a5-8eff-37bad227846c",
            dateFinished: new Date(),
          },
        });
      }}
    >
      Finish Repair
    </Button>
  );
};
