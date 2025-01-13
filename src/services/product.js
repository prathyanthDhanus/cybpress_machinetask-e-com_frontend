import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/slices/productSlice";
import { useNavigate } from "react-router-dom";
import axios from "../axios/apiClient";
import { showSuccessToast, showErrorToast } from "../utils/ToastNotification";

//================== Fetch all products using category id  ===============

export const useFetchAllProducts = (categoryId) => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(`/api/product/category/${categoryId}`);
      const data = response?.data?.data;
      dispatch(setProducts(data));
      return data;
    },
    onSuccess: (data) => {
      showSuccessToast("Products fetched successfully.");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Failed to fetch products. Try again."
      );
    },
  });
};

//================== Fetch product by id ===============

export const useFetchProductById = (productId) => {
  return useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(`/api/product/${productId}`);
      return response?.data?.data;
    },
    onSuccess: (data) => {
      showSuccessToast("Product fetched successfully.");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Failed to fetch product. Try again."
      );
    },
  });
};
