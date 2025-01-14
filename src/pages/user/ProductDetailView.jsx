import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Typography, CardMedia, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import { useFetchProductById } from "../../services/product";
import CustomButton from "../../components/buttons/CustomButton";
import { setSelectedProduct } from "../../store/slices/productSlice";
import { useAddToCart } from "../../services/cart";

const ProductDetailView = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const { data: product, isLoading, isError } = useFetchProductById(productId);
  const { mutate: addToCart, isPending: addToCartPending } = useAddToCart();

  // Initialize the selected variant when product is available
  useEffect(() => {
    if (product?.variants?.length > 0) {
      setSelectedVariant(product.variants[0]);
      setMainImage(product.variants[0]?.images[0]?.url);
    }
  }, [product]);

  //Varinat selection
  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
    setMainImage(variant.images[0]?.url);
  };

  // Select main image in sub image
  const handleThumbnailClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const handleBuyNow = () => {
    dispatch(setSelectedProduct(product));
    navigate(`/checkout/${1}`);
  };

  const handleAddToCart =()=>{
    if (selectedVariant) {
        const payload = {
          variantId: selectedVariant._id,
          price: product.price, 
          quantity :1
        }
        console.log(payload)
        addToCart(payload)
    
    };
   
  }

  if (isLoading) return <div>Loading product...</div>;
  if (isError) return <div>Failed to load product.</div>;

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {/* Thumbnail images of the selected variant */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Other Images:
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {selectedVariant?.images?.map((image, index) => (
              <CardMedia
                key={index}
                component="img"
                height="80"
                image={image.url}
                alt={image.altText || `Image ${index + 1}`}
                sx={{
                  borderRadius: 2,
                  cursor: "pointer",
                  border: mainImage === image.url ? "2px solid black" : "none",
                }}
                onClick={() => handleThumbnailClick(image.url)}
              />
            ))}
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          {mainImage && (
            <CardMedia
              component="img"
              height="400"
              image={mainImage}
              alt={selectedVariant?.altText || "Variant Image"}
              sx={{
                borderRadius: 2,
                boxShadow: 2,
              }}
            />
          )}
        </Grid>

        {/* Content Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            Price: ₹{product.price}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Stock: {selectedVariant ? selectedVariant.stock : "N/A"}
          </Typography>

          {/* Variant Selector */}
          <Typography variant="h6" sx={{ mt: 4 }}>
            Choose Color:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            {product.variants.map((variant) => (
              <Box
                key={variant._id}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: variant.color.toLowerCase(),
                  cursor: "pointer",
                  border:
                    selectedVariant?._id === variant._id
                      ? "2px solid black"
                      : "2px solid transparent",
                  boxShadow:
                    selectedVariant?._id === variant._id
                      ? "0 0 5px black"
                      : "none",
                }}
                onClick={() => handleVariantClick(variant)}
                title={variant.color}
              />
            ))}
          </Box>

          {/* Actions */}
          <Box sx={{ mt: 4, display: "flex", width: "100%", gap: "2rem" }}>
            <CustomButton
              text="Buy Now"
              color="primary"
              onClick={handleBuyNow}
            />
            {addToCartPending ? (
              <CircularProgress color="#ff5722" />
            ) : (
              <CustomButton
                text="Add To Cart"
                sx={{
                  backgroundColor: "#ff5722",
                  "&:hover": {
                    backgroundColor: "#ff784e",
                  },
                }}
                onClick={handleAddToCart}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailView;
