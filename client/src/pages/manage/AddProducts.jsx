import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { PackagePlus } from "lucide-react";
import TilesForm from "./TilesForm";
import { AntUploadInput, AntSelectInput, SubmitBtn, ToggleInput, AntMessageText } from "../../components";
import { productCategoryOptions } from "../../constants";
import { EAntStatusMessage, EProductsCategory } from "../../enums";
import { uploadService } from "../../api";
import { useDispatch } from "react-redux";
import { addTilesToInventory } from "../../store/slices/products/tilesThunk";
import { showMessage } from "../../hooks";
import { AnimEmojis } from "../../config/configData";

const categoryComponents = {
  [EProductsCategory.TILES]: TilesForm,
  [EProductsCategory.SANITARY_WARE]: '',
  [EProductsCategory.KITCHEN_FITTINGS]: '',
  [EProductsCategory.BATH_FITTINGS]: '',
};

const AddProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

    dispatch(addTilesToInventory(data))
      .unwrap()
      .then(() => {
        showMessage(
          EAntStatusMessage.SUCCESS,
          AntMessageText({
            statusText: 'Tile Added Successfully',
            emoji: AnimEmojis.Smile,
          })
        );
        event.target.reset();
        navigate('/inventory');
      })
      .catch((error) => {
        showMessage(
          EAntStatusMessage.ERROR,
          AntMessageText({
            statusText: error,
            emoji: AnimEmojis.BigFrown,
          })
        );
      });
  };

  return (
    <Form method="POST" onSubmit={handleSubmit} className="w-full p-5 md:p-8 shadow-md rounded-xl space-y-5 md:space-y-8">
      <div className="grid xl:flex gap-3 md:gap-8">
        <div className="grid md:grid-cols-3 xl:grid-cols-1 xl:w-1/2 xl:max-w-96 gap-3 md:gap-8">
          <div className="md:space-y-8">
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
            <div className="hidden md:block xl:hidden">
              <ToggleInput
                label='Featured'
                name='featured'
                defaultChecked={false}
              />
          </div>
          </div>
          <div className="md:col-span-2 xl:col-span-1">
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
          <div className="md:hidden xl:block">
            <ToggleInput
              label='Featured'
              name='featured'
              defaultChecked={false}
            />
          </div>
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
