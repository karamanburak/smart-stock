import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HomeIcon from '@mui/icons-material/Home';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {
  const navigate = useNavigate()
  return (
    <Grid item xs={12} mb={3}>
      <IconButton 
      onClick={()=> navigate("/")}
      sx={{position:"absolute",top:"0",left:"0", padding:"3rem"}}>
        <HomeIcon />
      </IconButton>
      <Typography variant="h3" color="secondary" align="center">
        Smart Stock GmbH
      </Typography>
    </Grid>
  );
};

export default AuthHeader;
