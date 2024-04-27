import { Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ text }) => {

  return (
    <Typography
      align="center"
      variant="h4"
      component={"h1"}
      color={"secondary.second"}
      mb={2}
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
