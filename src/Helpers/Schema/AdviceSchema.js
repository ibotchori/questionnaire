import * as yup from "yup";

export const AdviceSchema = yup
  .object({
    online: yup.string().required("არჩევა სავალდებულოა.").nullable(),
    office: yup.string().required("არჩევა სავალდებულოა.").nullable(),
    assembly: yup.string(),
    environment: yup.string(),
  })
  .required();
