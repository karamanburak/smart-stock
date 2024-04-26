import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import * as Yup from "yup";

//! Yup ile istediğimiz alanlara istediğimiz validasyon koşullarını
//  oluşturuyoruz. Sonra oluşturduğumuz bu şemayı formike tanımlayarak
//  kullanıyoruz. Böylelikle formik hem formumuzu yönetiyor hem de verdiğimiz
//  validationSchema yı uyguluyor. Dikkat edilmesi gereken husus; formikte
//  tanımladığımız initialValues daki keylerle, Yupta tanımladığımız keylerin
//  aynı olması. Eğer bir harf bile farklı olsa o alanla ilgili yazdığınız
//  validation çalışmaz.
export const SignupSchema = Yup.object().shape({
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

const registerFormField = [
  {id: "username",name: "username", label: "Username *", type: "text" },
  {id: "firstName",name: "firstName", label: "First Name *", type: "text" },
  {id: "lastName",name: "lastName", label: "Last Name *", type: "text" },
  {id: "email",name: "email", label: "Email Address *", type: "text" },
  {id: "password",name: "password", label: "Password *", type: "password" },
  {id: "confirmPassword",name: "confirmPassword", label: "Confirm Password *", type: "password" },
]

const SignUpForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  isSubmitting,
}) => {
  return (
    <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, }}>
          {registerFormField.map((field)=>(
          <TextField
            key={field.id}
            label={field.label}
            name={field.name}
            id={field.id}
            variant="outlined"
            inputProps={{
              autoComplete: "off"  // Burada "autoComplete" kullanılmalıdır.
            }}
            type={field.type}
            value={values[field.name]}
            onChange={handleChange}
              onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
              helperText={touched[field.name] && errors[field.name]} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için errors dan gelen mesajı yakalıyoruz.
              error={touched[field.name] && Boolean(errors[field.name])} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
              // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
          />
          ))}
          
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isSubmitting}
            color="secondary"
          >
            {isSubmitting ? "Loading..." : "Sign Up"}
          </Button>
        </Box>
      </Form>
  );
};

export default SignUpForm;
