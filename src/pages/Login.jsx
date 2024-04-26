import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthImage from "../components/Commons/AuthImage";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import LoginForm, { loginScheme } from "../components/Forms/LoginForm";
import Footer from "../components/Start/Footer";

const Login = () => {
  const { login } = useAuthCall();
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          alignItems="center"
          sx={{
            height: "90vh",
            p: 2,
          }}
        >
          <Grid item xs={12} sm={10} md={6}>
            <Avatar
              sx={{
                backgroundColor: "secondary.main",
                m: "auto",
                width: 40,
                height: 40,
              }}
            >
              <LockIcon size="30" />
            </Avatar>
            <Typography variant="h4" align="center" mb={4} color="secondary.main">
              SIGN IN
            </Typography>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginScheme}
              onSubmit={(values, actions) => {
                login(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={props => <LoginForm {...props} />}>

            </Formik>
            <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
              <Link to="/register">
                Don't have an account? Sign Up
              </Link>
            </Box>
          </Grid>

          <AuthImage image={image} />
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
