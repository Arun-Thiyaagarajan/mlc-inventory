import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  tilesData: [],
  favouriteTilesData: [],
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setTilesData: (state, action) => {
      state.tilesData = action.payload;
    }
  },
});

export const { setTilesData } = inventorySlice.actions;

export default inventorySlice.reducer;