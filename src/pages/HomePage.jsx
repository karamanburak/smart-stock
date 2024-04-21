import { AppBar, Box, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/stock-logo.png'
import image from '../assets/stock-home.jpg'
import Footer from "../components/Footer";
// import AuthImage from "../components/AuthImage";


const HomePage = () => {
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
                    p: 2,
                }}
            >
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6"
                            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
                            <img src={logo} alt="image" style={{ width: "45px", height: "45px", marginRight: ".7rem" }} />
                            Smart Stock
                        </Typography>
                        <Button
                            color="inherit"
                            sx={{ borderRadius: "20px", backgroundColor: "#01BDAE", marginRight: "1rem" }}
                            variant="outlined"
                            onClick={() => navigate("/login")}
                        >
                            Login <LoginIcon sx={{ ml: "0.5rem" }} />
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ borderRadius: "20px", backgroundColor: "gray" }}
                            variant="outlined"

                            onClick={() => navigate("/register")}
                        >
                            Register <AppRegistrationIcon sx={{ ml: "0.5rem" }} />
                        </Button>
                    </Toolbar>
                </AppBar>

                <Box sx={{ display: "flex", flexDirection: "column", margin: "auto", gap: ".5rem", textAlign: "justify" }}>
                    <Typography variant="h4" sx={{ marginTop: "3.8rem" }}>Wellcome to Smart Stock</Typography>
                    <Typography variant="span" style={{ width: "300px", margin: "auto", fontSize: "1.2rem" }}>
                        Store your warehouse stocks and get an all-automated stockholder registry with complete security. The Smart Stock gives you a platform where you can interact and manage your stocks.
                    </Typography>
                    <Button
                        sx={{ borderRadius: "20px", backgroundColor: "blue" }}
                        variant="contained"
                        onClick={() => navigate("/login")}
                    >
                        Get Started
                    </Button>
                </Box>
                {/* <AuthImage image={image}/> */}
                <img src={image} alt="image" style={{ width: "512px", height: "512px", margin: "auto" }} />
            </Grid>
                <Typography variant="div" sx={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
                    <Footer />
                </Typography>
        </Container>
    )
}

export default HomePage;
