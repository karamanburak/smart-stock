import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../components/Modals/ProductModal";
import useStockCall from "../hooks/useStockCall";
import ProductTable from "../components/Tables/ProductTable";
import PageHeader from "../components/Commons/PageHeader";

const Products = () => {
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
        sx={{backgroundColor:"neutral.dark"}}
        variant="contained"
        >
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
