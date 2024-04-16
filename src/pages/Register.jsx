import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import { Box, TextField, Button } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import * as Yup from 'yup'
import useAuthCall from "../hooks/useAuthCall";


const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(3)
    .max(15)
    .required('Username is requiered!'),
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('First name is required!'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Last name is required!'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, "The password must be at least 8 characters long")
    .max(20, "The password may be a maximum of 20 characters long")
    .matches(/\d/, "The password must contain at least one number!")
    .matches(/[a-z]/, "The password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "The password must contain at least one capital letter")
    .matches(/[@$?!%&*.]+/, "The password must contain at least one special character (@$!%*?&.)")
    .required("The password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Please make sure your passwords match')
    .required("Confirm password is required!")
});

const Register = () => {
  const { register } = useAuthCall()
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

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
            my={2}
            color="secondary.light"
          >
            REGISTER
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              confirmPassword: "",
              email: "",
              firstName: "",
              lastName: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              register(values);
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
                      id="username"
                      name="username"
                      label="Username *"
                      inputProps={{
                        autoComplete: "off"  // Burada "autoComplete" kullanılmalıdır.
                      }}
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.username && Boolean(errors.username)}
                      helperText={touched.username && errors.username}
                    />
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="First Name *"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                    />
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last Name *"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                    />

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
                    <TextField
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      label="Confirm Password *"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                      helperText={touched.confirmPassword && errors.confirmPassword}
                    />
                    <Button variant="contained" type="submit">Sign Up</Button>
                  </Box>
                </Form>
              )
            }
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
