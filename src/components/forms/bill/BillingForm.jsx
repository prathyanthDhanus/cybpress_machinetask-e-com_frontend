import React from "react";
import { Box, Typography } from "@mui/material";
import { useFormik } from "formik";

import CustomButton from "../../buttons/CustomButton";
import CustomInputField from "../../inputs/CustomInput";
import { billingInitialValues, billingSchema } from "./billingSchema";

const BillingForm = () => {
  const authFormik = useFormik({
    initialValues: billingInitialValues,
    validationSchema: billingSchema,
    onSubmit: async (values) => {},
  });

  const inputFields = [
    { name: "fullName", label: "Full Name" },
    { name: "email", label: "Email Address" },
    { name: "address", label: "Shipping Address" },
    { name: "phone", label: "Phone Number" },
  ];

  return (
    <Box sx={{ mb: 4, maxWidth: "500px", margin: "0 auto", width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Billing Information
      </Typography>

      <form onSubmit={authFormik.handleSubmit}>
        {inputFields.map((field) => (
          <CustomInputField
            key={field.name}
            name={field.name}
            label={field.label}
            value={authFormik.values[field.name]}
            onChange={authFormik.handleChange}
            onBlur={authFormik.handleBlur}
            error={
              authFormik.touched[field.name] &&
              Boolean(authFormik.errors[field.name])
            }
            helperText={
              authFormik.touched[field.name] && authFormik.errors[field.name]
            }
          />
        ))}

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton
            type="submit"
            text="Place Order"
            color="primary"
            sx={{ width: "100%", marginTop: "1rem", padding: "0.8rem" }}
          />
        </Box>
      </form>
    </Box>
  );
};

export default BillingForm;
