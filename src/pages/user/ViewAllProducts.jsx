import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";

import { useFetchAllProducts } from "../../services/product";
import ProductCard from "../../components/cards/ProductCard";

const ViewAllProducts = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const { products } = useSelector((state) => state.product);
//   console.log("products", products);
  const { isLoading, isError } = useFetchAllProducts(categoryId);
  if (isLoading) return <div>Loading categories...</div>;
  if (isError) return <div>Failed to load categories.</div>;
  return (
    <>
      <Container fixed>
        <Box >
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={12} md={4} lg={3} key={product._id}>
                <ProductCard
                  image={
                    product.variants.length > 0 &&
                    product.variants[0].images.length > 0
                      ? product.variants[0].images[0].url
                      : ""
                  }
                  title={product.name}
                  description={product.description}
                  price={product.price}
                  onClick={() => navigate(`/product/${product._id}`)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ViewAllProducts;
