import React from "react";
import pageNotFoundImage from "../../assets/images/freepik__a-young-woman-with-short-dark-hair-standing-next-t__5392.jpeg";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper } from "@mui/material";
import colors from "../../assets/color/color"; 

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        p: 4,
        backgroundColor: colors.background,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: "16px",
          maxWidth: "100%",
          textAlign: "center",
        //   borderRadius: "8px",

        }}
      >
        <img
          src={pageNotFoundImage}
          alt="Page Not Found"
          style={{ maxWidth: "300px", height: "auto", marginBottom: "16px" }}
        />
        <Typography
          variant="h4"
          sx={{
            color: "red", 
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: colors.textSecondary,
            marginBottom: 2,
          }}
        >
          The page you are looking for might have been moved or no longer exists.
        </Typography>
        <Button
          variant="outlined"
          sx={{
            color: colors.primary, 
            textDecoration: "underline",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: colors.buttonHover, 
              color:colors.textPrimary
            },
          }}
          onClick={() => navigate("/")}
        >
          Go back to the homepage
        </Button>
      </Paper>
    </Box>
  );
};

export default PageNotFound;
