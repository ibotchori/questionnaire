import * as yup from "yup";

export const CovidSchema = yup
  .object({
    covid: yup.string().required("არჩევა სავალდებულოა.").nullable(),
    test: yup
      .string()
      .nullable()
      .when("covid", {
        is: "yes",
        then: yup.string().required("არჩევა სავალდებულოა.").nullable(),
      }),
    // სავალდებულოა მხოლოდ მაშინ თუ covid არის "კი" და test არის "არა"
    covidPeriod: yup.string().when(["test", "covid"], (test, covid) => {
      if (test === "no" && covid === "yes")
        return yup
          .string()
          .required("გთხოვთ მიუთითოთ პერიოდი.")
          .matches(
            /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
            "გთხოვთ მიუთითოთ დდ/თთ/წწ ფორმატით"
          );
    }),
    testDate: yup.string(),
    testQuantity: yup.string(),
  })
  .required();
