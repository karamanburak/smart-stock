import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/stock-logo.png'
import image from '../assets/stock-home.jpg'
import Footer from "../components/Footer";
import AuthImage from "../components/AuthImage";

const HomePage = () => {
    const navigate = useNavigate()
    return (
        <Container maxWidth="lg" >
            <Grid
                container
                justifyContent="center"
                direction="row"
                rowSpacing={{ sm: 3 }}
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
                            sx={{ borderRadius: "20px", backgroundColor: "green", marginRight: "1rem" }}
                            variant="outlined"
                            onClick={() => navigate("/login")}
                        >
                            Login <LoginIcon sx={{ ml: "0.5rem" }} />
                        </Button>
                        <Button
                            color="inherit"
                            sx={{ borderRadius: "20px", backgroundColor: "red" }}
                            variant="outlined"

                            onClick={() => navigate("/register")}
                        >
                            Register <AppRegistrationIcon sx={{ ml: "0.5rem" }} />
                        </Button>
                    </Toolbar>
                </AppBar>
                <Grid container sx={{display:"flex", justifyContent:"space-between", alignItems:"center", margin:"auto"}}>
                    <Typography sx={{ display: "flex", flexDirection: "column",marginTop:"2rem" }}>
                        <Typography variant="h4">Wellcome to Smart Stock</Typography>
                        <p style={{ width: "400px", textAlign: "center" }}>
                            Store your warehouse stocks and get an all-automated stockholder registry with complete security. The Smart Stock gives you a platform where you can interact and manage your stocks.
                        </p>
                        <Button
                            sx={{ borderRadius: "20px", backgroundColor: "blue" }}
                            variant="contained"
                            onClick={() => navigate("/login")}
                        >
                            Get Started
                        </Button>
                    </Typography>
                    <AuthImage image={image} />
                </Grid>
                <Typography sx={{ position: "absolute", bottom: "0", left: "0", width: "100%"}}>
                    <Footer />
                </Typography>
            </Grid>
        </Container>
    )
}

export default HomePage;
