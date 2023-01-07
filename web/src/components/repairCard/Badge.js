import { Badge } from "@mantine/core";
import React from "react";

export const Flair = ({ text, color }) => {
  let type;
  switch (color) {
    case "be9e0fb7-1277-45c9-8fd1-3f5b8071f0d3":
      type = "green";
      break;
    case "7983b8b5-472d-4e07-946a-c157face13a6":
      type = "orange";
      break;
    case "0c3abf0e-a548-445b-8323-e3f580d54a84":
      type = "red";
      break;
    case "e8f93e09-851a-4c24-adda-07867725ca81":
      type = "blue";
      break;
    case "3e487a79-74d2-464c-b695-1d738ac58c48":
      type = "gray";
      break;
    default:
      type = "white";
  }
  return <Badge color={type}>{text}</Badge>;
};
