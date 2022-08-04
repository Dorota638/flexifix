import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Button } from "@mantine/core";
import { useStore } from "../../Store";

const TAKE_REPAIR = gql`
  mutation ($id: ID, $fkTechnicianId: Int) {
    editRepair(input: { id: $id, fkTechnicianId: $fkTechnicianId }) {
      id
      technician {
        name
      }
      dateStarted
    }
  }
`;

export const TakeRepairButton = ({repair}) => {
  const technician = useStore((store) => store.signedIn.id);
  const [takeRepair] = useMutation(TAKE_REPAIR);
  return (
    <Button
      className="mx-2 grow"
      onClick={() => {
        takeRepair({
          variables: {
            id: repair.id,
            fkTechnicianId: technician,
          },
        });
      }}
    >
      Take Repair
    </Button>
  );
};
