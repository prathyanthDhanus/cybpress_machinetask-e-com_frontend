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
    onSubmit: async (values) => {
    
    },
  });

  return (
    <Box sx={{ mb: 4, maxWidth: "500px", margin: "0 auto", width: "100%" }}>
      <Typography variant="h6" gutterBottom>
        Billing Information
      </Typography>

      <form onSubmit={authFormik.handleSubmit}>
        <CustomInputField
          name="fullName"
          label="Full Name"
          value={authFormik.values.fullName}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.fullName && Boolean(authFormik.errors.fullName)}
          helperText={authFormik.touched.fullName && authFormik.errors.fullName}
        />
        <CustomInputField
          name="email"
          label="Email Address"
          value={authFormik.values.email}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.email && Boolean(authFormik.errors.email)}
          helperText={authFormik.touched.email && authFormik.errors.email}
        />
        <CustomInputField
          name="address"
          label="Shipping Address"
          value={authFormik.values.address}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.address && Boolean(authFormik.errors.address)}
          helperText={authFormik.touched.address && authFormik.errors.address}
        />
        <CustomInputField
          name="phone"
          label="Phone Number"
          value={authFormik.values.phone}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.phone && Boolean(authFormik.errors.phone)}
          helperText={authFormik.touched.phone && authFormik.errors.phone}
        />

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
