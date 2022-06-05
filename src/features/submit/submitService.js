import axios from "axios";

/* Redux */
import { useSelector } from "react-redux";

const errorData = {
  email: "",
  first_name: "",
  had_covid: null,
  had_vaccine: false,
  i_am_waiting: null,
  last_name: "",
  non_formal_meetings: "once_in_a_month",
  number_of_days_from_office: "0",
};

const dummyData = {
  first_name: "gela",
  last_name: "babluani",
  email: "gela@redberry.ge",
  had_covid: "yes",
  had_antibody_test: "yes",
  antibodies: {
    test_date: "2022-04-30T13:34:31.347Z",
    number: 20,
  },
  had_vaccine: true,
  vaccination_stage: "first_dosage_and_registered_on_the_second",
  non_formal_meetings: "once_a_week",
  number_of_days_from_office: 3,
  what_about_meetings_in_live: "I will enjoy very much",
  tell_us_your_opinion_about_us:
    "It's great to be here! Just... why do guys have Postman logo? 🤔",
};

// API call
const SubmitData = async (dataForSubmit) => {
  const baseURL = "https://covid19.devtest.ge/api";

  const results = await axios({
    method: "POST",
    url: `${baseURL}/create`,
    data: dataForSubmit,
  });
  console.log(results);
  return results.statusText;
};

const submitService = {
  SubmitData,
};

export default submitService;
