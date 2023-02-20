import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/index";

export const getNewProduct = createAsyncThunk("product/getNew", async () => {
  try {
    const result = await api.get("/product/new");
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
});
export const getAllProduct = createAsyncThunk("product/getAll", async () => {
  try {
    const result = await api.get("/product");
    return result.data.data;
  } catch (error) {
    console.log(error);
  }
});
// add product
export const addProduct = createAsyncThunk(
  "product/add",
  async ({ formData, setLoading, toast }) => {
    try {
      const result = await api.post("/product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    all: [],
    addProduct: "",
  },
  extraReducers: (builder) => {
    builder.addCase(getNewProduct.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.all = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.add = action.payload;
    });
  },
});

export default productSlice.reducer;
