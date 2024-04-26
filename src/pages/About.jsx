import React from "react";
import StartNavbar from "../components/Start/StartNavbar";
import { Box, Container, Grid, Typography } from "@mui/material";
import Footer from "../components/Start/Footer";
import { flex, footer } from "../styles/globalStyle";

const avatars = [
    {
        name: "Benedikt Tribucke",
        position: "Founder & Co-CEO"
    },
    {
        name: "John Delivery",
        position: "Founder"
    },
    {
        name: "Yashijiro Ozu",
        position: " Co-CEO"
    },
    {
        name: "Nuri Bilge Ceylan",
        position: "Head Of Company"
    },
    {
        name: "Bela Tarr",
        position: "Head Of Finance"
    },
    {
        name: "Gaspar Noe",
        position: "Team Lead"
    },
]


const About = () => {
    return (
        <Container>
            <StartNavbar />
            <Typography variant="h3" sx={{ marginTop: "5rem", marginBottom: "2rem", textAlign: "center" }}>
                ABOUT US
            </Typography>
            <Typography variant="h4" sx={{ fontStyle: "italic", marginBottom: "2rem", textAlign: "center" }}>
                Empowering Businesses <br />
                <span style={{ color: "cornflowerblue" }}>Lean, Smart, Effective</span>
            </Typography>
            {/* <span style={{color:"cornflowerblue" }}>    
            Our story 
            </span> */}
            <Box sx={{ backgroundColor: "#F9FAFB", borderRadius: "10px", padding: "2rem" }}>
                <Typography variant="h5" sx={{ color: "cornflowerblue", textAlign: "center" }}>
                    Our Story
                </Typography>
                <br />
                This project is a comprehensive product audit project for front end and backend.
                The software was initially designed for personal use only. When the first hardware customers asked for it, I started to expand the version to meet their requirements, and soon the demand for the software outstripped the demand for smart stock management.
                <br />
                <br />
                Smart Stock helps small and medium-sized companies automate and simplify their daily operations. The user-friendly business software centralizes all orders, inventories, payments and shipping processes in one place: this creates more time, higher sales and greater customer satisfaction. Smart Stock offers flexible functions and interfaces to all common technology tools. With this setup, companies can develop sustainably day by day.
            </Box>
            <Box sx={{ backgroundColor: "#EFF0FD", borderRadius: "10px", padding: "2rem", marginTop: "2rem", marginBottom: "5rem" }}>
                    <Typography variant="h5" sx={{ color: "cornflowerblue", textAlign: "center" }}>
                        Our Team
                    </Typography>
                <Grid container spacing={3} mt={3} sx={flex} >
                    {avatars.map((avatar, index) => (
                        <Grid item xs={6} md={4} lg={3} key={index}>
                            <img
                                style={{ width: "224px", height: "224px", borderRadius: "50%", backgroundColor: "#fff" }}
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatar.name}`}
                                alt=""
                            />
                            <Typography variant="h6" align="center" sx={{ marginRight: "1rem", marginTop: "1rem", color: "red" }}>
                                {avatar.name}
                            </Typography>
                            <Typography align="center" sx={{ marginRight: "1rem" }}>
                                {avatar.position}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Typography variant="div" sx={footer}>
                <Footer />
            </Typography>
        </Container>
    )
};

export default About;
