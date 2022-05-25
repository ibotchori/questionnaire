import * as yup from "yup";

export const InjectionSchema = yup
  .object({
    injection: yup.string().required("A radio option is required").nullable(),
    stage: yup
      .string()
      .nullable()
      .when("injection", {
        is: "კი",
        then: yup.string().required("A radio option is required").nullable(),
      }),
    waitingFor: yup
      .string()
      .nullable()
      .when("injection", {
        is: "არა",
        then: yup.string().required("A radio option is required").nullable(),
      }),
  })
  .required();
