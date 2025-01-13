import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";

import e_comImage from "../../assets/images/rb_2151386699.png";
import ProductCard from "../../components/cards/ProductCard";
import { useFetchAllCategories } from "../../services/category";
import { useNavigate } from "react-router-dom";

//Dummy data
const productData = [
  {
    image: e_comImage,
    title: "Product 1",
    description: "This is the description for product 1.",
    price: 29.99,
  },
  {
    image: e_comImage,
    title: "Product 2",
    description: "This is the description for product 2.",
    price: 49.99,
  },
  {
    image: e_comImage,
    title: "Product 3",
    description: "This is the description for product 3.",
    price: 19.99,
  },
  {
    image: e_comImage,
    title: "Product 3",
    description: "This is the description for product 3.",
    price: 19.99,
  },
];

const HomePage = () => {

    const navigate = useNavigate();
  const { categories } = useSelector((state) => state.category);
  const { isLoading, isError } = useFetchAllCategories();

  if (isLoading) return <div>Loading categories...</div>;
  if (isError) return <div>Failed to load categories.</div>;


  return (
    <>
      <Container fixed>
        <Box sx={{ flexGrow: 1, marginBottom: "2rem" }}>
          {/* Section for Banner Image */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                src={e_comImage}
                alt="e-com"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  maxHeight: "400px",
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Category Heading */}
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            marginBottom: "1rem",
          }}
        >
          Category
        </Typography>

        {/* Product Grid Section */}
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={category._id}>
              <ProductCard
                image={category.image}
                title={category.categoryName}
                description={category.description}
                onClick={()=>navigate(`/categories/${category.categoryName}/${category._id}/products`)}
              />
            </Grid>
          ))}
        </Grid>

        <Typography
          variant="h5"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          Recomended For You
        </Typography>

        {/* Repeat the Product Grid for more products (if needed) */}
        <Grid container spacing={2} marginTop={4}>
          {productData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
