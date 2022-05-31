import * as yup from "yup";

export const CovidSchema = yup
  .object({
    covid: yup.string().required("არჩევა სავალდებულოა.").nullable(),
    test: yup
      .string()
      .nullable()
      .when("covid", {
        is: "კი",

        then: yup.string().required("არჩევა სავალდებულოა.").nullable(),
      }),
    // სავალდებულოა მხოლოდ მაშინ თუ covid არის "კი" და test არის "არა"
    covidPeriod: yup.string().when(["test", "covid"], (test, covid) => {
      if (test === "არა" && covid === "კი")
        return yup.string().required("გთხოვთ მიუთითოთ პერიოდი.");
    }),
    testDate: yup.string(),
    testQuantity: yup.string(),
  })
  .required();
