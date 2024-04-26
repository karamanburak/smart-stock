import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import PurchaseTable from "../components/Tables/PurchaseTable";
import PageHeader from "../components/Commons/PageHeader";
import StockModal from "../components/Commons/StockModal";
import PurchaseForm from "../components/Forms/PurchaseForm";
import { darkModeBtn, lightMode } from "../styles/globalStyle";

const Purchases = () => {
  const { mode } = useSelector(state => state.darkMode)
  const { getProPurcFirBrands } = useStockCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      brandId: "",
      firmId: "",
      productId: "",
      quantity: "",
      price: ""
    })
  };
  
  const [initialState, setInitialState] = useState({
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: ""
  });
  useEffect(() => {
    getProPurcFirBrands()

  }, []);
  return (
    <Container maxWidth={"xl"}>
      <PageHeader text="Purchases"/>
      <Button onClick={handleOpen}
        sx={mode ? lightMode : darkModeBtn}
        variant={mode ? "outlined" : "contained"}>
        New Purchase
      </Button>
      {open && (
        <StockModal open={open} handleClose={handleClose}>
          <PurchaseForm handleClose={handleClose} initialState={initialState} />
        </StockModal>
      )}
      <PurchaseTable 
        setInitialState={setInitialState}
        handleOpen={handleOpen}
      />
    </Container>
  );
};

export default Purchases;
