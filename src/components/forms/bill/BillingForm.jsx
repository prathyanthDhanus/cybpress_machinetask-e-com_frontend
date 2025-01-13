import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

import CustomButton from "../../buttons/CustomButton";
import { billingInitialValues, billingSchema } from "./billingSchema"; 

const BillingForm = ({ onSubmit }) => {
  const authFormik = useFormik({
    initialValues: billingInitialValues,
    validationSchema: billingSchema,
    onSubmit: (values) => {

      onSubmit(values);
      console.log(values);
    },
  });

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Billing Information
      </Typography>

      <form onSubmit={authFormik.handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          name="fullName"
          value={authFormik.values.fullName}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.fullName && Boolean(authFormik.errors.fullName)}
          helperText={authFormik.touched.fullName && authFormik.errors.fullName}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Email Address"
          variant="outlined"
          name="email"
          value={authFormik.values.email}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.email && Boolean(authFormik.errors.email)}
          helperText={authFormik.touched.email && authFormik.errors.email}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Shipping Address"
          variant="outlined"
          name="address"
          value={authFormik.values.address}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.address && Boolean(authFormik.errors.address)}
          helperText={authFormik.touched.address && authFormik.errors.address}
          sx={{ mb: 2 }}
          required
        />
        <TextField
          fullWidth
          label="Phone Number"
          variant="outlined"
          name="phone"
          value={authFormik.values.phone}
          onChange={authFormik.handleChange}
          onBlur={authFormik.handleBlur}
          error={authFormik.touched.phone && Boolean(authFormik.errors.phone)}
          helperText={authFormik.touched.phone && authFormik.errors.phone}
          sx={{ mb: 2 }}
          required
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
