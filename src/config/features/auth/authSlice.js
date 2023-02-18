import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/index";

export const registerSeller = createAsyncThunk(
  "seller/register",
  async ({ values, navigate, toast }) => {
    try {
      const result = await api.post("/auth/seller/register", values);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
      return result.data.message;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
export const loginSeller = createAsyncThunk(
  "seller/login",
  async ({ values, navigate, toast }) => {
    try {
      const result = await api.post("/auth/seller/login", values);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate("/");
      }, 2500);
      return result.data.message;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
export const registerCustomer = createAsyncThunk(
  "customer/register",
  async ({ customer, navigate, toast }) => {
    try {
      const result = await api.post("/auth/customer/register", customer);
      console.log(result);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
      return result.data.message;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);
export const loginCustomer = createAsyncThunk(
  "customer/login",
  async ({ values, navigate, toast }) => {
    try {
      const result = await api.post("/auth/customer/login", values);
      localStorage.setItem("token", result.data.data.token);
      toast.success(result.data.message);
      setTimeout(() => {
        navigate("/");
      }, 2500);
      return result.data.message;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    message: "",
  },
  extraReducers: (builder) => {
    builder.addCase(registerSeller.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(loginSeller.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(registerCustomer.fulfilled, (state, action) => {
      state.message = action.payload;
    });
    builder.addCase(loginCustomer.fulfilled, (state, action) => {
      state.message = action.payload;
    });
  },
});

export default authSlice.reducer;
