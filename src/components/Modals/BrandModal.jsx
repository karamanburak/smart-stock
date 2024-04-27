import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import useStockCall from '../../hooks/useStockCall';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BrandModal({ open, handleClose, initialState }) {
    // const { mode } = useSelector(state => state.darkMode)
    const { postStockData, putStockData } = useStockCall()

    const [info, setInfo] = useState(initialState)

    const handleChange = (e) => {
        // setInfo({...info,[e.target.id]: e.target.value})}
        setInfo({ ...info, [e.target.name]: e.target.value })
        // console.log(info); //* setter asenkron calisir o nedenle güncel veriyi yakalayamayiz *\\
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit", info);
        if (info._id) { //* id varsa edit işlemi
            putStockData("brands", info)
        } else {//* id yoksa create işlemi
            postStockData("brands", info)
        }
        handleClose()
    }

    const textFields = [
        { label: 'Brand Name', name: 'name', id: 'name', type: 'text' },
        { label: 'Image Url', name: 'image', id: 'image', type: 'text' }
    ];
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}//* onClose mui modal'a ait bir fonksiyondur.
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        {textFields.map(field => {
                            return (
                                <TextField
                                    key={field.name}
                                    label={field.label}
                                    name={field.name}
                                    id={field.id}
                                    type={field.type}
                                    variant="filled"
                                    color="secondary"                                    
                                    value={info[field.name]}
                                    onChange={handleChange}
                                >
                                </TextField>
                            )
                        })}

                        <Button
                            sx={{backgroundColor:"secondary.main"}}
                            variant="contained"
                            type="submit">
                            {info._id ? "Update Brand" : "Submit Brand"}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}