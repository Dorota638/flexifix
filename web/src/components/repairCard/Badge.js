import { Badge } from "@mantine/core";
import React from "react";

export const Flair = ({ text, color }) => {
  let type;
  switch (color) {
    case 1:
      type = "green";
      break;
    case 2:
      type = "orange";
      break;
    case 3:
      type = "red";
      break;
    case 4:
      type = "blue";
      break;
    case 5:
      type = "gray";
      break;
    default:
      type = "white";
  }
  return <Badge color={type}>{text}</Badge>;
};
