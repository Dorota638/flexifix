import { Badge } from "@mantine/core";
import React from "react";

export const Flair = ({ text, color }) => {
  let type;
  switch (color) {
    case "94e02487-77d7-435d-be8b-99a2ed8cde07":
      type = "green";
      break;
    case "39266e2c-a182-4ab2-9c21-7e1d3e24ae3d":
      type = "orange";
      break;
    case "5597ef43-3989-4481-a6c5-d039bf70ef56":
      type = "red";
      break;
    case "337a9aaa-8839-45a5-8eff-37bad227846c":
      type = "blue";
      break;
    case "cbf710fd-870b-4219-876b-b236693f86f2":
      type = "gray";
      break;
    default:
      type = "white";
  }
  return <Badge color={type}>{text}</Badge>;
};
