import { Badge } from "antd";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {

  return (
    <div className="px-5 bg-base-100 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
export default ProductsGrid;