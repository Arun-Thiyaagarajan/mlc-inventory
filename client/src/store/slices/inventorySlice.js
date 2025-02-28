import { createSlice } from "@reduxjs/toolkit";
import { addTilesToInventory, fetchAllTiles } from "./products/tilesThunk";


const initialState = {
  tilesData: [],
  favouriteTilesData: [],
  loading: false,
  error: null,
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    // setTilesData: (state, action) => {
    //   state.tilesData = action.payload;
    // }
  },
  extraReducers: (builder) => { 
    builder
      .addCase(addTilesToInventory.pending, (state) => {
        state.loading = true;
      })
      .addCase(addTilesToInventory.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addTilesToInventory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle fetching all tiles
      .addCase(fetchAllTiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllTiles.fulfilled, (state, action) => {
        state.loading = false;
        state.tilesData = action.payload.products; // ✅ Only store fetched tiles
      })
      .addCase(fetchAllTiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { setTilesData } = inventorySlice.actions;

export default inventorySlice.reducer;