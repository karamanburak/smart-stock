import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import PurchasesModal from "../components/Modals/PurchasesModal";
import PurchaseTable from "../components/Tables/PurchaseTable";

const Purchases = () => {
  const { mode } = useSelector(state => state.darkMode)
  const { getStockData, getProCatBrand } = useStockCall();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    // getStockData("products");
    // getStockData("categories");
    // getStockData("brands");
    // getStockData("firms");
    getProCatBrand()

  }, []);
  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
      >
        Products
      </Typography>
      <Button onClick={handleOpen}
        sx={{ backgroundColor: mode ? "white" : "secondary.main", color: mode ? "primary.main" : "white", marginBottom: 2 }}
        variant={mode ? "outlined" : "contained"}>
        New Purchase
      </Button>
      {open && (
        <PurchasesModal
          open={open}
          handleClose={handleClose}
        />
      )}
      <PurchaseTable />
    </Container>
  );
};

export default Purchases;
