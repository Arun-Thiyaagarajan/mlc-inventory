import { ProductsGrid, SectionTitle } from "../../components";


const FeaturedProducts = () => {
  return (
    <section className="pb-5">
      <SectionTitle text='Featured Products' />
      <ProductsGrid />
    </section>
  );
}
export default FeaturedProducts;