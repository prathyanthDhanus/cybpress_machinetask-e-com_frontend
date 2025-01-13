import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Container,
  AppBar,
  Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import colors from "../../assets/color/color";
import { useSelector } from "react-redux";

import dummyimage from "../../assets/images/133967.jpg";
import dummyimage2 from "../../assets/images/rb_2151386699.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.accessToken);

  const handleStartShopping = () => {
    if (user) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      {/* Hero Section */}
      <Box sx={{ backgroundColor: colors.secondary, padding: "50px 0" }}>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                Welcome to Our E-Commerce Store
              </Typography>
              <Typography variant="h6" sx={{ margin: "20px 0" }}>
                Shop the best products at unbeatable prices.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  marginTop: "20px",
                  backgroundColor: colors.primary,
                  "&:hover": {
                    backgroundColor: colors.buttonHover,
                  },
                }}
                onClick={handleStartShopping}
              >
                Start Shopping
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <img
                src={dummyimage}
                alt="Hero"
                style={{ width: "100%", borderRadius: "10px" }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Product Section */}
      <Box sx={{ padding: "50px 0", backgroundColor: colors.background }}>
        <Container>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "30px",
              color: colors.textPrimary,
            }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {["Product 1", "Product 2", "Product 3", "Product 4"].map(
              (product, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <img
                      src={dummyimage2}
                      alt={product}
                      style={{ width: "100%" }}
                    />
                    <CardContent>
                      <Typography variant="h6">{product}</Typography>
                      <Typography variant="body2" color={colors.textSecondary}>
                        $100.00
                      </Typography>
                      <Button
                        size="small"
                        color="primary"
                        sx={{
                          marginTop: "10px",
                          backgroundColor: colors.primary,
                          "&:hover": {
                            backgroundColor: colors.buttonHover,
                          },
                        }}
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default LandingPage;
