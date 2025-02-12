import { ProductsGrid, Search, SectionTitle } from "../../components";


const Inventory = () => {
  const handleSelect = (value) => {
    console.log('Selected:', value);
  };
  return (
    <section className="space-y-10">
      {/* <Search
        apiEndpoint="https://api.example.com/search"
        placeholder="Search for tiles..."
        onSelect={handleSelect}
      /> */}
      <div className="">
        <SectionTitle text='New Arrivals' />
        <ProductsGrid />
      </div>
      <div>
        <SectionTitle text='Wall Tiles' />
        <ProductsGrid />
      </div>
    </section>
  );
}
export default Inventory;