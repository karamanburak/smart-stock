import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../assets/stock-home.jpg'
import Footer from "../components/Start/Footer";
import StartNavbar from "../components/Start/StartNavbar";
// import AuthImage from "../components/AuthImage";


const StartPage = () => {


    const navigate = useNavigate()
    return (
        <Container maxWidth="lg" >
            <Grid
                container
                justifyContent="center"
                direction="row"
                rowSpacing={{ sm: 2 }}
                sx={{
                    height: "100vh",
                    p: 1,
                }}
            >
                <StartNavbar />
                <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", gap: ".5rem", textAlign: "justify" }}>
                    <Typography variant="h4" sx={{ marginTop: "3.8rem",textAlign:"center" }}>Wellcome to Smart Stock</Typography>
                    <Typography variant="span" style={{ width: "500px", margin: "auto", fontSize: "1.2rem" }}>
                        Store your warehouse stock and get a fully automated stockholder register with full security. Smart Stock gives you a platform where you can interact with and manage your stock.
                        You can also check the current status and update it yourself if necessary. This can be done through a completely simple on-screen interface. You can enjoy using it.
                    </Typography>
                    <Button
                        sx={{
                            borderRadius: "20px", backgroundColor: "blue",
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "blue"
                            },
                        }}
                        variant="contained"
                        onClick={() => navigate("/login")}>
                        Get Started
                    </Button>
                </Box>
                {/* <AuthImage image={image}/> */}
                <img src={image} alt="image" style={{ width: "600px", height: "400px", margin: "auto" }} />
            </Grid>
            <Typography variant="div" sx={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
                <Footer />
            </Typography>
        </Container>
    )
}

export default StartPage;
