import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const AuthHeader = () => {
  return (
    <Grid item xs={12} mb={3}>
      <Typography variant="h3" color="secondary" align="center">
        Smart Stock GmbH
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
