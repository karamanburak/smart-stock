import { Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {  footerBtnStyle, footerContainer } from '../../styles/globalStyle';


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
    return <>
        <Toolbar
            sx={footerContainer}>
            <Button
                onClick={() => navigate("/about")}
                style={footerBtnStyle}>
                About
            </Button>
            <Button
                onClick={() => navigate("/imprint")}
                style={ footerBtnStyle }>
                Imprint
            </Button>
            <Typography sx={{ color: "secondary.main", textAlign: "center", fontWeight: "bold", flexGrow: 1, display: "block" }}>
                Made By Burak Karaman &copy; 2024
            </Typography>

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
