import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { tilesData } = useSelector(state => state.inventory); // Get tiles from Redux store

  return (
    <div className="px-5 bg-base-100 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {tilesData.length > 0 ? (
        tilesData.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default ProductsGrid;
