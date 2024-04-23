import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import logo from '../assets/stock-logo.png'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Typography variant="h6"
        onClick={()=>navigate("/")}
          sx={{cursor:"pointer", flexGrow: 1, display: "flex", alignItems: "center", color: "primary.main" }}>
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
    </AppBar>
  )
};

export default HomeNavbar;
