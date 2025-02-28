import { createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "../../../api";


// Async thunk for adding tiles to inventory
export const addTilesToInventory = createAsyncThunk(
  "addTiles", async (tilesData, { rejectWithValue }) => {
    try {
      const response = await productService.tiles.addTiles(tilesData);
      console.log("API Response:", response.data); // ✅ Debugging log
      return response.data;
    } catch (error) {
      console.log("API Error:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to add tiles");
    }
  }
);

// Async thunk for fetching all tiles from inventory
export const fetchAllTiles = createAsyncThunk(
  "fetchTiles", async (_, { rejectWithValue }) => {
    try {
      const response = await productService.tiles.fetchAllTiles();
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch tiles");
    }
  }
);