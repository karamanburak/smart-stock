import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
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

export default function FirmModal({ open, handleClose, initialState }) {
    const { mode } = useSelector(state => state.darkMode)
    const {postStockData,putStockData} = useStockCall()

const [info,setInfo] = useState(initialState)

    const handleChange = (e) => {
        // setInfo({...info,[e.target.id]: e.target.value})}
        setInfo({...info,[e.target.name]: e.target.value})
       // console.log(info); //* setter asenkron calisir o nedenle güncel veriyi yakalayamayiz *\\
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit", info);
        if (info._id) { //* id varsa edit işlemi
            putStockData("firms",info)
        } else {//* id yoksa create işlemi
            postStockData("firms",info)
        }
        handleClose()
    }

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
                    sx={{display:"flex", flexDirection:"column", gap:2}}>
                        <TextField
                            label="Firm Name"
                            name="name"
                            id="name"
                            type="text"
                            variant="outlined"
                            value={info.name}
                            // onChange={(e)=> setInfo({...info, name:e.target.value})}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Firm Address"
                            name="address"
                            id="address"
                            type="text"
                            variant="outlined"
                            value={info.address}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Firm Phone"
                            name="phone"
                            id="phone"
                            type="text"
                            variant="outlined"
                            value={info.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Firm Logo"
                            name="image"
                            id="image"
                            type="text"
                            variant="outlined"
                            value={info.image}
                            onChange={handleChange}
                        />
                        <Button 
                            sx={{ backgroundColor: mode ? "white" : "primary.main", color: mode ? "primary.main" : "white" }}
                            variant={mode ? "outlined" : "contained"}
                            type="submit">
                            {info._id ? "Update Firm" : "Submit Firm"}
                            </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}