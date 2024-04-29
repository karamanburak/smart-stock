import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

const PageHeader = ({ text }) => {
  const theme = useTheme()

  return (
    <Typography
      align="center"
      variant="h1"
      component={"h1"}
      color={theme.palette.mode === "dark" ? "secondary.main" : "primary.main"}
      mb={2}
    >
      {text}
    </Typography>
  );
};

export default PageHeader;
