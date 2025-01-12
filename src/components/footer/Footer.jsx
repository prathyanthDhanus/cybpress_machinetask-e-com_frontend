import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import Grid from "@mui/material/Grid2";
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#2196f3', color: '#fff', padding: '20px 0' }}>
      <Container>
        {/* Footer content */}
        <Grid container spacing={4} justifyContent="center">
          {/* Column 1: About Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: '15px' }}>
              About Us
            </Typography>
            <Typography variant="body2">
              We are an e-commerce platform offering the best products at unbeatable prices. Shop now for amazing deals!
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: '15px' }}>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>
                <Link href="#" color="inherit" variant="body2">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" variant="body2">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" color="inherit" variant="body2">
                  Contact Us
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Column 3: Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ marginBottom: '15px' }}>
              Follow Us
            </Typography>
            <IconButton color="inherit" href="https://www.facebook.com" target="_blank" sx={{ margin: '0 5px' }}>
              <Facebook />
            </IconButton>
            <IconButton color="inherit" href="https://www.twitter.com" target="_blank" sx={{ margin: '0 5px' }}>
              <Twitter />
            </IconButton>
            <IconButton color="inherit" href="https://www.instagram.com" target="_blank" sx={{ margin: '0 5px' }}>
              <Instagram />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank" sx={{ margin: '0 5px' }}>
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>

        {/* Footer bottom */}
        <Grid container justifyContent="center" sx={{ marginTop: '20px' }}>
          <Grid item>
            <Typography variant="body1" align="center">
              &copy; 2025 E-Commerce. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
