import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import useStockCall from "../../hooks/useStockCall";
import {  flexColumn,  modalStyle } from "../../styles/globalStyle";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";
import { useState } from "react";

export default function PurchasesModal({ open, handleClose, initialState }) {

    const { postStockData, putStockData } = useStockCall();
    const { firms, brands, products } = useSelector(state => state.stock)
    const [info, setInfo] = useState(initialState)


    const handleChange = (e) => {
        const { name, value } = e.target
        setInfo({ ...info, [name]: value });
    };
    console.log(info);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (info._id) { //* id varsa edit işlemi
            putStockData("purchases", info)
        } else {//* id yoksa create işlemi
            postStockData("purchases", info)
        }
        handleClose()
    };


    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose} //* onClose mui modal'a ait bir fonksiyondur.
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-firm-label">Firm</InputLabel>
                            <Select
                                labelId="demo-simple-firm-label"
                                id="firmId"
                                label="Firm"
                                items={firms}
                                name="firmId"
                                value={info?.firmId?._id || info?.firmId || ""}
                                onChange={handleChange}
                            >

                                {
                                    firms.map(firm => <MenuItem key={firm._id} value={firm._id}>{firm.name}</MenuItem>)

                                }

                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-brand-label">Brand</InputLabel>
                            <Select
                                labelId="demo-simple-brand-label"
                                id="brandId"
                                label="Brand"
                                items={brands}
                                name="brandId"
                                value={info?.brandId?._id || info?.brandId || ""}
                                onChange={handleChange}
                            >

                                {
                                    brands.map(brand => <MenuItem key={brand._id} value={brand._id}>{brand.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-product-label">Product</InputLabel>
                            <Select
                                labelId="demo-simple-product-label"
                                id="productId"
                                label="Product"
                                items={products}
                                name="productId"
                                value={info?.productId?._id || info?.productId || ""}
                                onChange={handleChange}
                            >

                                {
                                    products.map(product => <MenuItem key={product._id} value={product._id}>{product.name}</MenuItem>)
                                }
                            </Select>
                        </FormControl>
                        <TextField
                            label="Quantity *"
                            name="quantity"
                            id="quantity"
                            type="number"
                            variant="outlined"
                            value={info.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Price *"
                            name="price"
                            id="price"
                            type="number"
                            variant="outlined"
                            value={info.name}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit">
                            {info._id ? "UPDATE PURCHASE" : "ADD NEW PURCHASE"}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
