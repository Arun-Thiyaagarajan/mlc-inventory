import { useState } from "react";
import { Form } from "react-router-dom";
import { PackagePlus } from "lucide-react";
import TilesForm from "./TilesForm";
import { AntMessageText, AntUploadInput, AntSelectInput, SubmitBtn } from "../../components";
import { productCategoryOptions } from "../../constants";
import { EAntStatusMessage, EProductsCategory } from "../../enums";
import { uploadService } from "../../api";
import { AnimEmojis } from "../../config/configData";
import { showMessage } from "../../hooks";

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
    // showMessage(
    //   EAntStatusMessage.LOADING,
    //   AntMessageText({
    //     statusText: `Updating Inventory...`,
    //     emoji: AnimEmojis.Rocket,
    //   })
    // );
    const imageUrls = await uploadService.uploadImages(fileList, category);

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.images = imageUrls;
    // Remove the 'file' property if it exists
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
