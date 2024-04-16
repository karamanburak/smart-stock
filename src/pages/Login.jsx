import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Button, TextField, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import * as Yup from 'yup'
import { Form, Formik } from "formik";
import useAuthCall from "../hooks/useAuthCall";


const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required(),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters long")
    .max(20, "The password may be a maximum of 20 characters long")
    .matches(/\d/, "The password must contain at least one number!")
    .matches(/[a-z]/, "The password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "The password must contain at least one capital letter")
    .matches(/[@$?!%&*.]+/, "The password must contain at least one special character (@$!%*?&.)")
    .required()
});

const Login = () => {
  const theme = useTheme();
  const {login} = useAuthCall()

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

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
          <Typography variant="h4" align="center" my={2} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{
              password: "",
              email: "",
            }}
            validationSchema={SigninSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {
              ({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <Form>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                      id="email"
                      name="email"
                      label="Email *"
                      type="email"
                      inputProps={{
                        autoComplete: "off"  // Burada "autoComplete" kullanılmalıdır.
                      }}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                    <TextField
                      id="password"
                      name="password"
                      type="password"
                      label="Password *"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />
                    <Button
                      variant="contained"
                      type="submit"
                      size="large"
                      disabled={isSubmitting}
                    >Sign In</Button>
                  </Box>
                </Form>
              )
            }
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
  );
};

export default Login;
