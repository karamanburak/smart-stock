import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../components/Modals/ProductModal";
import useStockCall from "../hooks/useStockCall";
import ProductTable from "../components/Tables/ProductTable";
import PageHeader from "../components/Commons/PageHeader";
import { darkModeBtn, lightMode } from "../styles/globalStyle";

const Products = () => {
  const { mode } = useSelector(state => state.darkMode)
  const { getProCatBrand } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  console.log("products:", products);
  useEffect(() => {
    // getStockData("products");
    // getStockData("categories");
    // getStockData("brands");
    getProCatBrand()

  }, []);

  return (
    <Container maxWidth={"xl"}>
    <PageHeader text="Products"/>
      <Button onClick={handleOpen}
        sx={mode ? lightMode : darkModeBtn}
        variant={mode ? "outlined" : "contained"}>
        New Product
      </Button>
      {open && (
        <ProductModal
          open={open}
          handleClose={handleClose}
        />
      )}
      <ProductTable/>
    </Container>
  );
};

export default Products;
