import React from "react";
import unAuthImage from "../../assets/images/rb_19591.png";
import { useNavigate } from "react-router-dom";
import { Paper, Typography, Button, Box } from "@mui/material";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      className="h-screen flex flex-col items-center justify-center p-4"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
    >
      <Paper elevation={3} sx={{ maxWidth: "100%", padding: "16px", textAlign: "center" }}>
        <img
          src={unAuthImage}
          alt="Unauthorized"
          className="max-w-full h-auto mb-4 sm:max-w-xs md:max-w-md lg:max-w-lg"
          style={{ maxWidth: "300px" }}
        />
        <Typography variant="h4" sx={{ color: "red", fontWeight: "bold", marginBottom: 2 }}>
          Unauthorized
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary", marginBottom: 2 }}>
          You are not authorized to access this page.
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Click here to go{" "}
          <Button
            sx={{
              color: "primary.main",
              textDecoration: "underline",
              padding: 0,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={() => navigate("/")}
          >
            Landing Page
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default UnauthorizedPage;
