import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from '@mui/material';
import React from "react";

const Footer = () => {
    return <>
        <div
            style={{ backgroundColor: "#454F5B", height: "64px", padding: "0px 24px", display:"flex", justifyContent:"center",alignItems:"center",gap:"1rem"}}>
                        <Typography sx={{ color: "white", display:"flex",flexGrow:1}}>
                            Made By Burak Karaman &copy; 2024
                </Typography>
                    <Typography sx={{display:"flex",gap:"1rem"}}>
                        <a href="https://github.com/karamanburak"
                            target="_blank"
                            rel="noreferrer"><GitHubIcon sx={{fontSize: "2rem", color: "white" }} />
                        </a>
                    <a href="https://www.linkedin.com/in/karamanburak/"
                            target="_blank"
                            rel="noreferrer"><LinkedInIcon sx={{fontSize: "2rem", color: "white" }} />
                        </a>
                    </Typography>
        </div>

    </>;
};

export default Footer;
