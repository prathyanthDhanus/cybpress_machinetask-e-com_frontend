import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import RegisterForm from "../../components/forms/auth/RegisterForm";
import loginImage from "../../assets/images/rb_4582.png";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Image grid item */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={loginImage}
            alt="Login"
            style={{
              width: "100%",
              objectFit: "cover",
              maxWidth: "500px",
            }}
          />
        </Grid>

        {/* Form grid item */}
        <Grid item xs={12} sm={6} md={6}>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Poppins, sans-serif", fontWeight: "600" }}
          >
            Register
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "1rem",
              color: "gray",
            }}
          >
             🔐 Join the Adventure! Start Your Journey with Us Today. 🚀
          </Typography>
          {/*
         Login form
          */}
          <RegisterForm />
          {/*
         Login form
          */}
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "300",
              marginTop: "3rem",
              display: "inline",
            }}
          >
            Don't have an account? Click here to
          </Typography>{" "}
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterPage;
