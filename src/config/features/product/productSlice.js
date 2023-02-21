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

export const getMyProduct = createAsyncThunk(
  "product/getMyProduct",
  async (sellerId) => {
    try {
      const result = await api.get(`/product/seller/${sellerId}`);
      return result.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
      setLoading(false);
      toast.success(result.data.message);
      return result.data.data;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async ({ id, setLoading }) => {
    try {
      const result = await api.get(`/product/${id}`);
      setLoading(false);
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
    myProducts: [],
    item: [],
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
    builder.addCase(getMyProduct.fulfilled, (state, action) => {
      state.myProducts = action.payload;
    });
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.item = action.payload;
    });
  },
});

export default productSlice.reducer;
