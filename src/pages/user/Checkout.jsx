import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useParams } from "react-router-dom";

import BillingForm from "../../components/forms/bill/BillingForm";


const CheckoutPage = () => {
  const { id } = useParams();
 
  // Fetch data from Redux
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const cartData = useSelector((state) => state.cart.products[0]);

  // Determine which data to show based on the id parameter
  const productToCheckout = id === "1" ? selectedProduct : cartData;

  if (!productToCheckout) {
    return <div>Something went wrong!</div>;
  }

  const handleCheckout = () => {
    console.log("Order placed for", productToCheckout);
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
            <Typography variant="body1">
              {productToCheckout?.name || productToCheckout?.items?.[0]?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {productToCheckout?.variants
                ? `Variant: ${productToCheckout?.variants[0]?.color}`
                : ""}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
              ₹{productToCheckout?.price || productToCheckout?.totalAmount}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Billing Form */}
      <BillingForm />
  {/* Billing Form */}
    
    </Container>
  );
};

export default CheckoutPage;
