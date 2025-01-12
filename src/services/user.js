
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from '../axios/apiClient';
import {
  showSuccessToast,
  showErrorToast,
} from "../utils/ToastNotification";
import { loginUser } from "../store/slices/useSlice";


const BASE_URL = '/api/auth';

//============= User login service ================

export const useLogin = () => {

  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(`${BASE_URL}/login`, values);
      return response.data;
    },
    onSuccess: (data) => {
      // Dispatch the login action with user data, accessToken, and refreshToken
      dispatch(loginUser({
        user: data?.data?.user,
        accessToken: data?.data?.accessToken,
        refreshToken: data?.data?.refreshToken,
      }));
      showSuccessToast(data?.message);
      navigate("/home");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Login failed. Try again."
      );
    },
  });
};
//============= User register service ================

export const useRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async (values) => {
      const response = await axios.post(`${BASE_URL}/register`, values);
      return response.data;
    },
    onSuccess: (data) => {
      showSuccessToast(data?.message);
      navigate("/login");
    },
    onError: (error) => {
      showErrorToast(
        error?.response?.data?.message || "Registration failed. Try again."
      );
    },
  });
};

