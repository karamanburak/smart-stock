import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const PageHeader = ({ text }) => {
  const { mode } = useSelector(state => state.darkMode)

  return (
    <Typography
      align="center"
      variant="h4"
      component={"h1"}
      color={"secondary.second"}
      sx={{ marginBottom: 2, backgroundColor: mode ? "white" : "primary.main", color: mode ? "primary.main" : "white" }}
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
