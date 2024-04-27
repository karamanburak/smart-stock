import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../assets/stock-home.jpg'
import Footer from "../components/Start/Footer";
import StartNavbar from "../components/Start/StartNavbar";
import { flex } from "../styles/globalStyle";


const StartPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container maxWidth="100vw">
                <StartNavbar />
                <Grid container spacing={2} mt={9} sx={{ height: "80vh", flex }}>
                    <Grid item xs={12} md={4} sx={{ marginRight:"2rem" }}>
                        <Box sx={{ display: "flex", flexDirection: "column", gap: ".5rem", textAlign: "justify", justifyContent: "center", alignItems: "center" }}>
                            <Typography variant="h2" sx={{ textAlign: "center" }}>Wellcome to Smart Stock</Typography>
                            <Typography variant="span" style={{ maxWidth: "500px", fontSize: "1.2rem" }}>
                                Store your warehouse stock and get a fully automated stockholder register with full security. Smart Stock gives you a platform where you can interact with and manage your stock.
                                You can also check the current status and update it yourself if necessary. This can be done through a completely simple on-screen interface.
                            </Typography>
                            <Button sx={{
                                borderRadius: "20px", backgroundColor: "blue",
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "blue"
                                }
                            }}
                                variant="contained"
                                onClick={() => navigate("/login")}>Get Started </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img src={image} alt="image" style={{ width: "600px", height: "400px", margin: "auto" }} />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default StartPage;
