import { AppBar, Button, Container, Grid, Toolbar, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/stock-logo.png'
import stockHomeLogo from '../assets/stock-home.jpg'
import Footer from "../components/Footer";


const HomePage = () => {
    const navigate = useNavigate()
    return <>
        <AppBar
            position="fixed">
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", margin: "auto" }}>
                <h1>Wellcome to Smart Stock</h1>
                <p style={{ width: "400px", margin: "auto", textAlign: "center", marginBottom: "1rem" }}>
                    Store your warehouse stocks and get an all-automated stockholder registry with complete security. The Smart Stock gives you a platform where you can interact and manage your stocks.
                </p>
                <Button
                    sx={{ borderRadius: "20px", backgroundColor: "blue" }}
                    variant="contained">
                    Get Started
                </Button>
            </div>
            <Grid>
            <Container>

                <img src={stockHomeLogo} alt="image" style={{ width: "700px", height: "700px" }} />
            </Container>
            </Grid>
        </div>
        <div>
            <Footer />
        </div>
    </>
}

export default HomePage;
