import {  Box, Button, Container, Grid,  Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import image from '../assets/stock-home.jpg'
import Footer from "../components/Footer";
import HomeNavbar from "../components/HomeNavbar";
// import AuthImage from "../components/AuthImage";


const HomePage = () => {

    const hoverStyle = {
        backgroundColor: "secondary.main",
        borderRadius: "1rem",
        "&:hover": {
            backgroundColor: "#38636D",
            color: "white",
        },
        color: "white",
    };

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
                {/* <AppBar sx={{ backgroundColor: "white" }}>
                    <Toolbar>
                        <Typography variant="h6"
                            sx={{ flexGrow: 1, display: "flex", alignItems: "center", color: "primary.main" }}>
                            <img src={logo} alt="image" style={{ width: "45px", height: "45px", marginRight: ".7rem" }} />
                            Smart Stock
                        </Typography>
                        <Button
                            sx={{
                                borderRadius: "20px", backgroundColor: "#01BDAE", color: "white", marginRight: "1rem",
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "#01BDAE"
                                },
                            }}
                            onClick={() => navigate("/login")}
                        >
                            Login <LoginIcon sx={{ ml: "0.5rem" }} />
                        </Button>
                        <Button
                            sx={{
                                borderRadius: "20px", backgroundColor: "gray", color: "white",
                                "&.MuiButtonBase-root:hover": {
                                    bgcolor: "gray"
                                },
                            }}

                            onClick={() => navigate("/register")}
                        >
                            Register <AppRegistrationIcon sx={{ ml: "0.5rem" }} />
                        </Button>
                    </Toolbar>
                </AppBar> */}
                
                <HomeNavbar/>
                                <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", gap: ".5rem",textAlign:"justify"}}>
                    <Typography variant="h4" sx={{ marginTop: "3.8rem" }}>Wellcome to Smart Stock</Typography>
                    <Typography variant="span" style={{ width: "380px", margin: "auto", fontSize: "1.2rem" }}>
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
                        onClick={() => navigate("/login")}
                    >
                        Get Started
                    </Button>
                </Box>
                {/* <AuthImage image={image}/> */}
                <img src={image} alt="image" style={{ width:"600px", height: "400px", margin: "auto" }} />
            </Grid>
            <Typography variant="div" sx={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
                <Footer />
            </Typography>
        </Container>
    )
}

export default HomePage;
