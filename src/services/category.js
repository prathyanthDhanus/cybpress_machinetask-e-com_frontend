import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setCategories } from "../store/slices/categorySlice";
import { useNavigate } from "react-router-dom";
import axios from "../axios/apiClient";
import { showSuccessToast, showErrorToast } from "../utils/ToastNotification";

//================== Fetch all categories  ===============

export const useFetchAllCategories = () => {
  const dispatch = useDispatch();

  return useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(`/api/category`);
      const data = response?.data?.data;
      dispatch(setCategories(data));
      return data;
    },
    onSuccess: (data) => {
      showSuccessToast("Categories fetched successfully.");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message ||
          "Failed to fetch categories. Try again."
      );
    },
  });
};

