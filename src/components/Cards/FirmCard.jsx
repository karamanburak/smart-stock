import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import useStockCall from '../../hooks/useStockCall';
import { Button, useTheme } from '@mui/material';


export default function FirmCard({ _id, name, address, image, phone, handleOpen, setInitialState }) {
    const { deleteStockData } = useStockCall()
    const theme = useTheme()


    return (
        <Card sx={{
            height: 390,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: ".5rem",
            backgroundColor: theme.palette.mode === "dark" ? "primary.main" : "white",

        }}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body2"
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
                    variant="body2" color="text.secondary">
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
                    sx={{ backgroundColor: "neutral.dark" }}
                    variant="contained"
                    >
                    EDIT
                    <EditNoteIcon
                        sx={{ cursor: "pointer", marginLeft: ".2rem"}} />
                </Button>
                <Button
                    onClick={() => deleteStockData("firms", _id)}
                    sx={{ backgroundColor: "neutral.dark" }}
                    variant="contained"
                    >
                    DELETE
                    <DeleteForeverIcon
                        sx={{ cursor: "pointer", marginLeft: ".2rem" }}
                    />
                </Button>
            </CardActions>
        </Card>
    );
}