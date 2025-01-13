import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography, Box, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

import BillingForm from "../../components/forms/bill/BillingForm";

const CheckoutPage = () => {
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  if (!selectedProduct) {
    return <div>No product selected!</div>;
  }

  const handleCheckout = () => {
    console.log("Order placed for", selectedProduct);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Checkout
      </Typography>

      {/* Product Summary */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6">Product Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="body1">{selectedProduct.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              Variant: {selectedProduct.variants[0]?.color}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
              ₹{selectedProduct.price}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* 
      Billing form 
      */}
      <BillingForm />
      {/* 
      Billing form 
      */}
    </Container>
  );
};

export default CheckoutPage;
