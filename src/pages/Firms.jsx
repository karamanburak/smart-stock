import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Button, Container, Grid, Typography } from "@mui/material";
import FirmCard from "../components/Cards/FirmCard";
import FirmModal from "../components/Modals/FirmModal";
import { useState } from "react";

const Firms = () => {

  const { getStockData } = useStockCall()
  const {mode} = useSelector(state => state.darkMode)
  const { firms } = useSelector(state => state.stock)
  console.log("Firms", firms);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      phone: "",
      address: "",
      image: "",
    });
    }
  const [initialState,setInitialState] = useState({
    "name": "",
    "phone": "",
    "address": "",
    "image": ""
  })
  // console.log("initialState", initialState);

  useEffect(() => {
    getStockData("firms")
  }, [])

  return (
    <Container>
      <Typography
        align="center"
        variant="h4"
        component="h1">
        Firms
      </Typography>
        <Button
        onClick={handleOpen}
        sx={{ backgroundColor: mode ? "white" : "secondary.main", color: mode ? "primary.main" : "white" }}
          variant={mode ? "outlined" : "contained"}> New Firm </Button>
      <Grid container spacing={2} mt={3} >
        {firms.map((firm) => (
          <Grid
           item xs={12} md={6} lg={4} xl={3} key={firm._id}>

            <FirmCard 
            {...firm} 
            handleOpen={handleOpen} 
            setInitialState={setInitialState}/>
          </Grid>
        ))}
      </Grid>
{open && (
  <FirmModal 
  open={open} 
  handleClose={handleClose} 
  initialState={initialState}
  />
  )}    
</Container>
  )
}

export default Firms