import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import PurchaseModal from "../components/Modals/PurchaseModal";
import PurchaseTable from "../components/Tables/PurchaseTable";

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
      <Typography
        align="center"
        variant="h4"
        component="h1"
      >
        Purchases
      </Typography>
      <Button onClick={handleOpen}
        sx={{ backgroundColor: mode ? "white" : "secondary.main", color: mode ? "primary.main" : "white", marginBottom: 2 }}
        variant={mode ? "outlined" : "contained"}>
        New Purchase
      </Button>
      {open && (
        <PurchaseModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
      <PurchaseTable 
        setInitialState={setInitialState}
        handleOpen={handleOpen}
      />
    </Container>
  );
};

export default Purchases;
