import React from "react";
import { useFormik } from "formik";

import CustomButton from "../../buttons/CustomButton";
import CustomInputField from "../../inputs/CustomInput";
import { registerInitialValues, registerSchema } from "./authValidation";
import { useRegister } from "../../../services/user";

const RegisterForm = () => {
  const { mutate } = useRegister();

  //formik validation
  const authFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      mutate(values);
      console.log(values)
    },
  });

  return (
    <>
      <form onSubmit={authFormik.handleSubmit}
        style={{
            maxWidth: "500px", 
            margin: "0 auto", 
            width: "100%", 
          }}
      >
      <CustomInputField
          name="username"
          type="text"
          label="Username"
          value={authFormik.values.username}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.username && Boolean(authFormik.errors.username)}
          helperText={authFormik.touched.username && authFormik.errors.username}
        />
        <CustomInputField
          name="email"
          type="email"
          label="Email"
          value={authFormik.values.email}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.email && Boolean(authFormik.errors.email)}
          helperText={authFormik.touched.email && authFormik.errors.email}
        />
        <CustomInputField
          name="password"
          type="password"
          label="Password"
          value={authFormik.values.password}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={
            authFormik.touched.password && Boolean(authFormik.errors.password)
          }
          helperText={authFormik.touched.password && authFormik.errors.password}
        />
        <CustomButton
          type="submit"
          text="Login"
          color="primary"
          sx={{ width: "100%", marginTop: "1rem", padding: "0.8rem" }}
        />
      </form>
    </>
  );
};

export default RegisterForm;
