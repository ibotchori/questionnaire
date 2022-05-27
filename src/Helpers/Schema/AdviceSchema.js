import * as yup from "yup";

export const AdviceSchema = yup
  .object({
    online: yup.string().required("A radio option is required").nullable(),
    office: yup.string().required("A radio option is required").nullable(),
    assembly: yup.string(),
    environment: yup.string(),
  })
  .required();
