import * as yup from "yup";

export const IdentificationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name should be required please")
    .min(2, "First Name should be at least 2 characters")
    .max(12, "First Name should be maximum 12 characters"),
  lastName: yup
    .string()
    .required("Last Name should be required please")
    .min(2, "Last Name should be at least 2 characters")
    .max(12, "Last Name should be maximum 12 characters"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email should be required please"),
});

// export const IdentificationSchema = yup
// .object({
//   firstName: yup
//     .string()
//     .required("First Name should be required please")
//     .min(2, "First Name should be at least 2 characters")
//     .max(12, "First Name should be maximum 12 characters"),
//   lastName: yup
//     .string()
//     .required("Last Name should be required please")
//     .min(2, "Last Name should be at least 2 characters")
//     .max(12, "Last Name should be maximum 12 characters"),
//   email: yup
//     .string()
//     .email("Email must be a valid email")
//     .required("Email should be required please"),
// })
// .required();
