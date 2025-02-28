import apiClient from "./api";

const tiles = {
  addTiles: (tilesData) => apiClient.post("/products/tiles", tilesData),
  fetchAllTiles: () => apiClient.get("/products/tiles"),
};

export default { tiles };