import { useDispatch, useSelector } from "react-redux";
import { ProductsGrid, Search, SectionTitle } from "../../components";
import { useEffect } from "react";
import { fetchAllTiles } from "../../store/slices/products/tilesThunk";


const Inventory = () => {
  const dispatch = useDispatch();
  const { tilesData, loading, error } = useSelector((state) => state.inventory);
  console.log(tilesData)
  // Fetch all tiles on component mount
  useEffect(() => {
    dispatch(fetchAllTiles());
  }, [dispatch]);

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