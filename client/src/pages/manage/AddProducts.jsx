import { useState } from "react";
import { SelectInput, SubmitBtn } from "../../components";
import { productCategoryOptions } from "../../constants";
import { EProductsCategory } from "../../enums";
import TilesForm from "./TilesForm";

const categoryComponents = {
  [EProductsCategory.TILES]: TilesForm,
  [EProductsCategory.SANITARY_WARE]: '',
  [EProductsCategory.KITCHEN_FITTINGS]: '',
  [EProductsCategory.BATH_FITTINGS]: '',
};

const AddProducts = () => {
  const [category, setCategory] = useState(EProductsCategory.TILES);

  const selectChange = (value) => {
    setCategory(value);
    console.log(`Selected: ${value}`);
  };
  
  const SelectedComponent = categoryComponents[category] || null;

  return (
    <section className="w-full p-8 shadow-md rounded-xl flex flex-col gap-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SelectInput
          label='category'
          optionsArray={productCategoryOptions}
          selectChange={selectChange}
        />
      </div>
      
      {SelectedComponent && <SelectedComponent />}
      
      <div className="md:self-center">
        <SubmitBtn text='submit' statusText='adding...' size="btn-block md:btn-wide" />
      </div>
    </section>
  );
};

export default AddProducts;
