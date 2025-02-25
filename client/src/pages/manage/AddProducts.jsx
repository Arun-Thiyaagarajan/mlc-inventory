import { useState } from "react";
import { Form } from "react-router-dom";
import { PackagePlus } from "lucide-react";
import TilesForm from "./TilesForm";
import { AntUploadInput, AntSelectInput, SubmitBtn, ToggleInput } from "../../components";
import { productCategoryOptions } from "../../constants";
import { EProductsCategory } from "../../enums";
import { uploadService } from "../../api";

const categoryComponents = {
  [EProductsCategory.TILES]: TilesForm,
  [EProductsCategory.SANITARY_WARE]: '',
  [EProductsCategory.KITCHEN_FITTINGS]: '',
  [EProductsCategory.BATH_FITTINGS]: '',
};

const AddProducts = () => {
  const [category, setCategory] = useState(EProductsCategory.TILES);
  const [fileList, setFileList] = useState([]);

  const onCategoryChange = (value) => {
    setCategory(value);
    setFileList([]);
  };

  const SelectedComponent = categoryComponents[category] || null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageUrls = await uploadService.uploadImages(fileList, category);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.images = imageUrls;
    // Ensure 'featured' is explicitly set (default to false if missing)
    data.featured = formData.has("featured");
    ["sqftRate", "noOfBoxes", "pcsPerBox", "boxRate"].forEach((key) => {
      if (data[key] !== undefined) {
        data[key] = Number(data[key]);
      }
    });
    delete data.file;

    console.log("Submitted Data:", data);
  };

  return (
    <Form method="POST" onSubmit={handleSubmit} className="w-full p-5 md:p-8 shadow-md rounded-xl space-y-5 md:space-y-8">
      <div className="grid xl:flex gap-3 md:gap-8">
        <div className="flex flex-col xl:w-1/2 xl:max-w-96 gap-3 md:gap-8">
          <AntSelectInput
            label='category'
            name='category'
            sortable={false}
            optionsArray={productCategoryOptions}
            selectChange={onCategoryChange}
            selectedValue={category}
            defaultValue={category}
            placeholder='Select the category'
          />

          <AntUploadInput
            label={`Upload ${category.replace('-', ' ')} Images`}
            name="images"
            maxFiles={3}
            uploadProps={{ multiple: true }}
            fileList={fileList}
            setFileList={setFileList}
            productCategory={category}
          />

          <ToggleInput
            label='Featured'
            name='featured'
            defaultChecked={false}
          />
        </div>
        {SelectedComponent && <SelectedComponent />}
      </div>

      <div className="grid place-items-center">
        <SubmitBtn text='add to stocks' icon={PackagePlus} statusText='adding...' size="btn-block md:btn-wide" />
      </div>
    </Form>
  );
};

export default AddProducts;
