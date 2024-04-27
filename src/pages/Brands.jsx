import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import BrandCard from "../components/Cards/BrandCard";
import BrandModal from "../components/Modals/BrandModal";
import loadingGif from "../assets/loading.gif";
import PageHeader from "../components/Commons/PageHeader";


const Brands = () => {

  const { getStockData } = useStockCall()
  const { brands,loading } = useSelector(state => state.stock)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      name: "",
      image: "",
    });
  }
  const [initialState, setInitialState] = useState({
    "name": "",
    "image": ""
  })

  useEffect(() => {
    getStockData("brands")
  }, [])

  return (
    <Container>
      <PageHeader text="Brands" />

      <Button
        onClick={handleOpen}
        sx={  {backgroundColor:"neutral.dark"} }
        variant= "contained"
        > New Brand </Button>
      <Grid container spacing={2} mt={3} >
        {loading ? (
          <img src={loadingGif} alt="loading..." height={500} />
        ) : (brands.map((brand) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={brand._id}>
            <BrandCard
              {...brand}
              handleOpen={handleOpen}
              setInitialState={setInitialState}
            />
          </Grid>
        )))}
      </Grid>
      {open && (
        <BrandModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  )
}

export default Brands