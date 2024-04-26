import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { darkMode, lightMode } from "../../styles/globalStyle";

const PageHeader = ({ text }) => {
  const { mode } = useSelector(state => state.darkMode)

  return (
    <Typography
      align="center"
      variant="h4"
      component={"h1"}
      color={"secondary.second"}
      sx={mode ? lightMode : darkMode}
      mb={2}
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
