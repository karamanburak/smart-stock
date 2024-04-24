import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import ProductTable from "../components/Tables/ProductTable";
import SalesModal from "../components/Modals/SalesModal";

const Sales = () => {
  const { mode } = useSelector(state => state.darkMode)
  const { getStockData, getProCatBrand } = useStockCall();
  const { sales } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  console.log("sales:", sales);
  useEffect(() => {
    // getStockData("products");
    // getStockData("categories");
    // getStockData("brands");
    getProCatBrand()

  }, []);
  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
      >
        Sales
      </Typography>
      <Button
       onClick={handleOpen}
        sx={{ backgroundColor: mode ? "white" : "secondary.main", color: mode ? "primary.main" : "white", marginBottom: 2 }}
        variant={mode ? "outlined" : "contained"}>
        New Sale
      </Button>
      {open && (
        <SalesModal
          open={open}
          handleClose={handleClose}
        />
      )}
      <ProductTable />
    </Container>
  )
};

export default Sales;
