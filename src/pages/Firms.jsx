import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Button, Container, Grid, Typography } from "@mui/material";
import FirmModal from "../components/Modals/FirmModal";
import { useState } from "react";
import loadingGif from "../assets/loading.gif";
import FirmCard from './../components/Cards/FirmCard';
import PageHeader from "../components/Commons/PageHeader";


const Firms = () => {

  const { getStockData } = useStockCall()
  const {mode} = useSelector(state => state.darkMode)
  const { firms,loading } = useSelector(state => state.stock)
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
  console.log("initialState", initialState);

  useEffect(() => {
    getStockData("firms")
  }, [])

  return (
    <Container>
      <PageHeader text="Firms" />
        <Button
        onClick={handleOpen}
        sx={{ backgroundColor: mode ? "white" : "secondary.main", color: mode ? "primary.main" : "white" }}
          variant={mode ? "outlined" : "contained"}> New Firm </Button>
      <Grid container spacing={2} mt={3} >
        {loading ? (
          <img src={loadingGif} alt="loading..." height={500} />
        ) : (firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard
              {...firm}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        )))}
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