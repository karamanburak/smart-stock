import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { useSelector } from "react-redux"
import { object, string} from "yup"; //! bu şekilde de direk olarak metodları alıp yine validasyon şemamızı oluşturabiliriz. 

export const loginScheme = object({
  email: string()
    .email('Invalid email!')
    .required("Email is required!"),
  password: string()
    .required("Password is required!")
})

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const { loading } = useSelector(state => state.auth);// storeda yaptığımız fetchStart işlemini kullanmış olduk.
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Email *"
          name="email"
          id="email"
          inputProps={{
            autoComplete: "off"  // Burada "autoComplete" kullanılmalıdır.
          }}
          type="email"
          variant="filled"
          color="secondary"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <TextField
          label="Password *"
          name="password"
          id="password"
          type="password"
          variant="filled"
          color="secondary"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        {!loading ? (
          <Button variant="contained" type="submit" sx={{ backgroundColor: "secondary.main" }}>
            Sign In
          </Button>
        ) : (
          <Button variant="contained" disabled={loading}>
            <CircularProgress />
          </Button>
        )}
      </Box>
    </Form>
  );
}

export default LoginForm
