import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Typography, Divider, Avatar } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";

import { useFetchCart } from "../../services/cart";
import { setCartProducts } from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDeleteCart } from "../../services/cart";

const ViewCart = () => {
  const navigate = useNavigate();
  const { data: fetchCartData, isLoading, isError, refetch: refetchCartData } = useFetchCart();
  const { mutate: deleteCart, isSuccess: successDeleteCart } = useDeleteCart();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.products[0]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // If Redux state is available, use it; otherwise, use fetched data
    if (cartData?.items) {
      setCartItems(cartData.items);
    } else if (fetchCartData?.items) {
      setCartItems(fetchCartData.items);
      dispatch(setCartProducts([fetchCartData])); // Update Redux with fetched data
    }
  }, [cartData, fetchCartData, dispatch]);

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleQuantityChange = (variantId, type) => {
    const updatedItems = cartItems.map((item) => {
      if (item.variantId._id === variantId) {
        const newQuantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1;
        return {
          ...item,
          quantity: Math.max(newQuantity, 1),
          price: Math.max(newQuantity, 1) * (item.price / item.quantity),
        };
      }
      return item;
    });

    setCartItems(updatedItems);
    // Update Redux with updated items and total amount
    dispatch(
      setCartProducts([{
        ...cartData,
        items: updatedItems,
        totalAmount: updatedItems.reduce((acc, item) => acc + item.price, 0),
      }])
    );
  };

  const handleCheckout = () => {
    // Dispatch total amount and cart items to Redux before navigating
    dispatch(
      setCartProducts([{
        ...cartData,
        items: cartItems,
        totalAmount,
      }])
    );
    navigate(`/checkout/${2}`);
  };

  const handleDelete = (variantId) => {
    deleteCart(variantId);
    if (successDeleteCart) {
      refetchCartData();
    }
  };

  if (isLoading) return <div>Loading cart items...</div>;
  if (isError) return <div>Failed to load cart items.</div>;

  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      {/* Left Side: Cart Items */}
      <Grid item xs={12} md={8} lg={8} xl={8}>
        <Typography variant="h5" gutterBottom>
          Your Cart
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {cartItems.map((item) => (
          <Box
            key={item.variantId._id}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              p: 2,
              border: "1px solid #ddd",
              borderRadius: "8px",
            }}
          >
            {/* Product Image */}
            <Avatar
              src={item.variantId.images[0]?.url}
              alt={item.variantId.images[0]?.altText}
              sx={{ width: 60, height: 60, mr: 2 }}
            />
            <Box>
              <Typography variant="body1">
                Color: {item.variantId.color}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Price: ₹{item.price}
              </Typography>
            </Box>
            {/* Quantity Controls */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleQuantityChange(item.variantId._id, "decrease")}
              >
                -
              </Button>
              <Typography>{item.quantity}</Typography>
              <Button
                variant="contained"
                size="small"
                onClick={() => handleQuantityChange(item.variantId._id, "increase")}
              >
                +
              </Button>
              <DeleteIcon
                sx={{ color: "red", cursor: "pointer" }}
                onClick={() => handleDelete(item.variantId._id)}
              />
            </Box>
          </Box>
        ))}
      </Grid>

      {/* Right Side: Checkout Summary */}
      <Grid item xs={12} md={4} lg={4} xl={4}>
        <Box
          sx={{
            p: 4,
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Checkout Summary
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1">
            Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Total Amount: ₹{totalAmount}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 4 }}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ViewCart;
