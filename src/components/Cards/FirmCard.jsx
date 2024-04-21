import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useSelector } from 'react-redux';


export default function FirmCard ({_id,name,address,image,phone}) {
    const {mode} = useSelector(state => state.darkMode)
    return (
        <Card sx={{
            height:390,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding:".5rem",
            backgroundColor: mode ? "white" : "primary.main", color: mode ? "primar.main" : "white"     
         }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2"
                sx={{color: mode ? "primary.main" : "white"}}
                >
                    {address}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ height: 140, objectFit:"contain"}}
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
                justifyContent:"center",
                alignItems:"center", 
                gap:2
                }}
                >
                <EditNoteIcon/>
                <DeleteForeverIcon/>
            </CardActions>
        </Card>
    );
}