import * as yup from "yup";

export const formValidation = yup.object().shape({
  breed: yup
    .string("Text must be a string")
    .required("Breed name is required"),
});
