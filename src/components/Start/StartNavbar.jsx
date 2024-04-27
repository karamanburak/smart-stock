import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logo from '../../assets/stock-logo.png'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "@mui/material";
import { useContext } from 'react';
import { ColorModeContext } from '../../styles/theme';

const StartNavbar = () => {
  const navigate = useNavigate();
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <AppBar sx={{
      backgroundColor: theme.palette.mode === "dark" ? "primary.main" : "#fcfcfc"
     }}>
      <Toolbar>
        <Typography variant="h4"
        onClick={()=>navigate("/")}
          sx={{ cursor: "pointer", flexGrow: 1, display: "flex", alignItems: "center", color: theme.palette.mode === "dark" ? "white" : "primary.main" }}>
          <img src={logo} alt="image" style={{ width: "45px", height: "45px", marginRight: ".7rem" }} />
          Smart Stock
        </Typography>
        <Button
         variant='contained'
         sx={{backgroundColor:"neutral.main", marginRight:"1rem"}}
          onClick={() => navigate("/login")}
        >
          Login <LoginIcon sx={{ ml: "0.5rem" }} />
        </Button>
        <Button
          variant='contained'
          sx={{ backgroundColor: "neutral.main", color:"secondary.main" }}
          onClick={() => navigate("/register")}
        >
          Register <AppRegistrationIcon sx={{ ml: "0.5rem" }} />
        </Button>
      </Toolbar>
    </AppBar>
  )
};

export default StartNavbar;
