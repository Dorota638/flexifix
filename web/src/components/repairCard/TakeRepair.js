import React from "react";
import { useMutation } from "@apollo/client";
import { Button } from "@mantine/core";
import { useStore } from "../../Store";
import { GET_TODO, TAKE_REPAIR } from "../../queries";


export const TakeRepair = ({ repair }) => {
  const technician = useStore((store) => store.signedIn.id);
  const [takeRepair] = useMutation(TAKE_REPAIR, {
    refetchQueries: [{ query: GET_TODO }],
  });
  return (
    <Button
      className="mx-2 grow"
      onClick={() => {
        takeRepair({
          variables: {
            id: repair.id,
            status: "5597ef43-3989-4481-a6c5-d039bf70ef56",
            dateStarted: new Date(),
            fkTechnicianId: technician,
          },
        });
      }}
    >
      Take Repair
    </Button>
  );
};
