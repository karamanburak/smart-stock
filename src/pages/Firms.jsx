import React, { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Button, Container, Grid, Typography } from "@mui/material";
import FirmCard from "../components/Cards/FirmCard";

const Firms = () => {

  const { getStockData } = useStockCall()
  const { firms } = useSelector(state => state.stock)
  console.log("Firms", firms);

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
          variant="contained"> New Firm </Button>
      <Grid container spacing={2} mt={3}>
        {firms.map((firm) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={firm._id}>
            <FirmCard {...firm} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Firms