import * as yup from "yup";

export const InjectionSchema = yup
  .object({
    injection: yup.string().required("არჩევა სავალდებულოა.").nullable(),
    stage: yup
      .string()
      .nullable()
      .when("injection", {
        is: "კი",
        then: yup.string().required("არჩევა სავალდებულოა.").nullable(),
      }),
    waitingFor: yup
      .string()
      .nullable()
      .when("injection", {
        is: "არა",
        then: yup.string().required("არჩევა სავალდებულოა.").nullable(),
      }),
  })
  .required();
