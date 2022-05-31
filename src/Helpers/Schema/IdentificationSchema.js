import * as yup from "yup";

export const IdentificationSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "სახელი არ უნდა შეიცავდეს ციფრებს.")
    .required("სახელის მითითება სავალდებულოა.")
    .min(2, "სახელი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან.")
    .max(20, "სახელი არ უნდა აღემატებოდეს 20 სიმბოლოს."),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "გვარი არ უნდა შეიცავდეს ციფრებს.")
    .required("გვარის მითითება სავალდებულოა.")
    .min(2, "გვარი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან.")
    .max(20, "გბვარი არ უნდა აღემატებოდეს 20 სიმბოლოს."),
  email: yup
    .string()
    .email("გთხოთ მიუთითოთ სწორი ფორმატით.")
    .required("მეილი სავალდებულოა."),
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
