// orderSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api'; // Import your API functions

const initialState = {
  dish: null,
  loading: false,
  error: null,
};

// Define the asynchronous thunk function
export const placeOrder = createAsyncThunk('order/placeOrder', async (orderData, { rejectWithValue }) => {
  try {
    // Make an API call to place the order
    const response = await api.placeOrder(orderData);

    // Return the data to be stored in the state
    return response.data;
  } catch (error) {
    // If an error occurs, reject the promise with the error message
    return rejectWithValue(error.message);
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(placeOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(placeOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(placeOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;
