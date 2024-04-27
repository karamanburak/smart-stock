import {  Button, IconButton, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LigtModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import { useTheme } from "@mui/material";
import { useContext } from 'react';
import { footerBtnStyle } from '../../styles/globalStyle';
import { ColorModeContext } from './../../styles/theme';


const links = [
    {
        address: "/",
        src: "https://img.icons8.com/bubbles/50/home.png",
    },
    {
        address: "https://mailto:karaman.buraak@gmail.com",
        src: "https://img.icons8.com/bubbles/50/new-post.png",
        target: "_blank"
    },
    {
        address: "https://github.com/karamanburak",
        src: "https://img.icons8.com/bubbles/50/github.png",
        target: "_blank"
    },
    {
        address: "https://www.linkedin.com/in/karamanburak/",
        src: "https://img.icons8.com/bubbles/50/linkedin.png",
        target: "_blank"
    },
]

const Footer = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)

    return < >
        <Toolbar
            sx={{
                backgroundColor : theme.palette.mode === "dark" ? "primary.main" : "#fcfcfc",
                position: "fixed",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw"
}}>
            <Button
                onClick={() => navigate("/about")}
                sx={footerBtnStyle}>
                About
            </Button>
            <Button
                onClick={() => navigate("/imprint")}
                sx={footerBtnStyle}
                >
                Imprint
            </Button>
            <Typography sx={{ color: "secondary.main", textAlign: "center", fontWeight: "bold", flexGrow: 1, display: "block" }}>
                Made By Burak Karaman &copy; 2024
            </Typography>

            <IconButton
                sx={{ width: "45px", height: "45px", marginTop: ".4rem" }}
                onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlinedIcon />
                ) : (
                    <LigtModeOutlinedIcon />
                )}
            </IconButton>

            {links.map((link,index)=>(
            <Typography key={index} sx={{
                display: "flex",
                '&:hover': {
                    transform: "scale( 1.10)" }
            }}>
                 <a href={link.address} target={link.target}>
                    <img width="50" height="50" src={link.src} alt="new-post" />
                </a> 
            </Typography>
                ))}
               
        </Toolbar>
    </>;
};

export default Footer;
