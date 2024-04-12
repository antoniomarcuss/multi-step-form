import * as yup from "yup";
export const schema = yup.object({
  name: yup
    .string()
    .required("this field is required")
    .min("4", "Minimum 4 letters"),
  email: yup
    .string()
    .required("this field is required")
    .email("Invalid email")
    .matches(/(.com)$/, "end with (.com)"),
  phone: yup
    .string()
    .required("this field is required")
    .matches(/^[0-9]{9}$/, "Must be exactly 10 numbers"),
});
