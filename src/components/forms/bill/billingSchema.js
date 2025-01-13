import * as Yup from "yup";
import { nameValidation, emailValidation } from "../auth/authValidation";
export const billingInitialValues = {
  fullName: "",
  email: "",
  address: "",
  phone: "",
};

export const billingSchema = Yup.object({
  fullName: nameValidation,
  email: emailValidation,
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
});
