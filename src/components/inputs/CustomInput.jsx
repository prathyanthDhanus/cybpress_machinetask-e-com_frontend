import React from "react";
import TextField from "@mui/material/TextField";

const CustomInputField = ({ label, error, helperText, ...props }) => {
  return (
    <TextField
      {...props}
      label={label}
      error={error}
      helperText={helperText}
      variant="outlined"
      margin="normal"
      fullWidth
    />
  );
};

export default CustomInputField;
