
import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({
  text,
  variant = "contained",
  color = "primary",
  onClick,
  ...props
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} {...props}>
      {text}
    </Button>
  );
};

export default CustomButton;
