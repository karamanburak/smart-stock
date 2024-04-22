import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from 'react-redux';
import useStockCall from '../../hooks/useStockCall';
import { Button } from '@mui/material';


export default function FirmCard({ _id, name, address, image, phone, handleOpen, setInitialState }) {
    const { mode } = useSelector(state => state.darkMode)
    const { deleteStockData } = useStockCall()

    return (
        <Card sx={{
            height: 390,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: ".5rem",
            backgroundColor: mode ? "white" : "primary.main", color: mode ? "primar.main" : "white",
            boxShadow: mode ? "0 0 10px 0 rgba(0,0,0,0.2)" : "0 0 10px 0 rgba(255,255,255,0.2)",

        }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2"
                    sx={{ color: mode ? "primary.main" : "white" }}
                >
                    {address}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ height: 140, objectFit: "contain" }}
                component="img"
                image={image}
                title={name}
            />
            <CardContent>
                <Typography
                    variant="body2" color="text.secondary"
                    sx={{ color: mode ? "primary.main" : "white" }}
                >
                    Phone: {phone}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2
                }}>
                <Button
                    onClick={()=>{
                        handleOpen();
                        setInitialState({_id,name,phone,image,address})
                        }}
                    sx={{ backgroundColor: mode ? "white" : "primary.main", color: mode ? "primary.main" : "white" }}
                    variant={mode ? "outlined" : "contained"}>
                    EDIT
                    <EditNoteIcon
                        sx={{ cursor: "pointer", marginLeft: ".5rem", backgroundColor: mode ? "white" : "primary.main", color: mode ? "primary.main" : "white" }} />
                </Button>
                <Button
                    onClick={() => deleteStockData("firms", _id)}
                    sx={{ backgroundColor: mode ? "white" : "primary.main", color: mode ? "primary.main" : "white" }}
                    variant={mode ? "outlined" : "contained"}>
                    DELETE
                    <DeleteForeverIcon
                        sx={{ cursor: "pointer", marginLeft: ".5rem" }}
                    />
                </Button>
            </CardActions>
        </Card>
    );
}