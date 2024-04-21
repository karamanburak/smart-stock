import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";

const Footer = () => {
    return <>
        <div
            style={{ backgroundColor: "#454F5B",height:"64px", padding:"0px 24px", marginTop:".5rem", marginLeft:"-.5rem"}}>
                <div style={{  display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <h3 style={{ color: "white" }}
                        >
                            Made By Burak Karaman &copy; 2024
                        </h3>
                    </div>
                    <div >
                        <a href="https://github.com/karamanburak"
                            target="_blank"
                            rel="noreferrer"><GitHubIcon sx={{ ml: "0.5rem", fontSize: "2rem", color: "white" }} />
                        </a>
                    <a href="https://www.linkedin.com/in/karamanburak/"
                            target="_blank"
                            rel="noreferrer"><LinkedInIcon sx={{ ml: "0.5rem", fontSize: "2rem", color: "white" }} />
                        </a>
                    </div>
                </div>
        </div>

    </>;
};

export default Footer;
