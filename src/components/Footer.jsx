import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Toolbar,  Typography } from '@mui/material';
import React from "react";

const Footer = () => {
    return <>
        <Toolbar
            sx={{ backgroundColor:"white", height:"64px", padding: "0px 24px", display:"flex", justifyContent:"center",alignItems:"center", gap:"1.2rem"}}>
            <Typography sx={{color:"secondary.main", textAlign: "center", fontWeight:"bold", flexGrow:1,display:"block" }}>
                            Made By Burak Karaman &copy; 2024
                </Typography>
                    <Typography>
                        <a href="https://github.com/karamanburak"
                            target="_blank"
                            rel="noreferrer"><GitHubIcon sx={{fontSize: "2rem",color:"secondary.main"}} />
                        </a>
                    <a href="https://www.linkedin.com/in/karamanburak/"
                            target="_blank"
                    rel="noreferrer"><LinkedInIcon sx={{ fontSize: "2rem", color: "secondary.main" }} />
                        </a>
                    </Typography>
        </Toolbar>
    </>;
};

export default Footer;
