import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCartProducts } from "../store/slices/cartSlice";
import axios from "../axios/apiClient";
import { showSuccessToast, showErrorToast } from "../utils/ToastNotification";

//============= Add to cart ================

export const useAddToCart = () => {
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(`/api/cart/user`, values);
      return response.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Failed To Add To Cart. Try again."
      );
    },
  });
};

//================== Fetch all products form the cart (specific user)  ===============

export const useFetchCart = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await axios.get(`/api/cart/user`);
      const data = response?.data?.data;
      dispatch(setCartProducts(data));
      return data;
    },
    onSuccess: (data) => {
      showSuccessToast("Cart items fetched successfully.");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to fetch cart items. Try again."
      );
    },
  });
};

//============= update cart ================

export const useUpdateCart = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.put(`/api/cart`, values);
      const data = response.data.data;
      dispatch(setCartProducts(data));
      return data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Failed To Update Cart. Try again."
      );
    },
  });
};



//============= delete from cart ================

export const useDeleteCart = () => {
    return useMutation({
      mutationFn: async (variantId) => {
       
        const response = await axios.delete(`/api/cart/user/${variantId}`);
        const data = response.data;
        return data;
      },
      onSuccess: (data) => {
        showSuccessToast(data?.message);
      },
      onError: (error) => {
        showErrorToast(
          error?.response?.data?.message || "Failed To delete Cart. Try again."
        );
      },
    });
  };
  