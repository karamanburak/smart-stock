import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import AuthImage from "../components/Commons/AuthImage";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";
import RegisterForm, { SignupSchema } from "../components/Forms/RegisterForm";
import Footer from "../components/Start/Footer";

const Register = () => {
  const { register } = useAuthCall()
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="center"
          direction="row-reverse"
          rowSpacing={{ sm: 3 }}
          alignItems="center"
          sx={{
            height: "90vh",
            p: 2,
          }}
        >
          <Grid item xs={12} sm={10} md={6}>
            <Avatar
              sx={{
                backgroundColor: "secondary.light",
                m: "auto",
                width: 40,
                height: 40,
              }}
            >
              <LockIcon size="30" />
            </Avatar>
            <Typography
              variant="h4"
              align="center"
              mb={2}
              color="secondary.light"
            >
              Register
            </Typography>

            <Formik
              initialValues={{
                username: "",
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values, actions) => {
                register(values);
                actions.resetForm();
                actions.setSubmitting(false);
              }}
              component={(props) => <RegisterForm {...props} />}
            ></Formik>
            <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
              <Link to="/login">Already have an account? Sign in</Link>
            </Box>
          </Grid>

          <AuthImage image={image} />
        </Grid>
      </Container>
              <Footer/>
    </>
  );
};

export default Register;
