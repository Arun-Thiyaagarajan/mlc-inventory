import { useState } from "react";
import { DaisyTable } from "../../components";
import { productCategoryOptions } from "../../constants";
import { tilesGridCols } from "../../constants/gridColumns";

const AllProducts = () => {
  const [gridCols, setGridCols] = useState(tilesGridCols);
  return (
    <div className="w-full min-h-[83vh] p-5 md:p-8 shadow-md rounded-xl space-y-5">
      {productCategoryOptions.map(({ label, value, icon: Icon }, index) => {
        
        return (
          <div key={index} className="collapse collapse-arrow p-3 bg-base-100 border border-base-300 rounded-xl">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium flex items-center gap-3">
              <Icon />
              {label}
            </div>
            <div className="collapse-content overflow-x-auto">
              <DaisyTable columns={gridCols} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllProducts;