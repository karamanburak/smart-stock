import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import SaleTable from "../components/Tables/SaleTable";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import SaleForm from "../components/Forms/SaleForm";

const Sales = () => {
  const { mode } = useSelector(state => state.darkMode)
  const { getProSalBrands } = useStockCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      productId: "",
      quantity: "",
      price: ""
    })
  };

  // console.log("sales:", sales);

  const [initialState, setInitialState] = useState({
    brandId: "",
    productId: "",
    quantity: "",
    price: ""
  });


  useEffect(() => {
    getProSalBrands()

  }, []);
  return (
    <Container maxWidth={"xl"}>
    <PageHeader text="Sales"/>
      <Button
       onClick={handleOpen}
        sx={{ backgroundColor: mode ? "white" : "secondary.main", color: mode ? "primary.main" : "white", marginBottom: 2 }}
        variant={mode ? "outlined" : "contained"}>
        New Sale
      </Button>
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <SaleForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
      <SaleTable 
        setInitialState={setInitialState}
        handleOpen={handleOpen}
      />
    </Container>
  )
};

export default Sales;
