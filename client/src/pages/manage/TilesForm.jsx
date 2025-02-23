import { useState } from "react";
import { AntInput, AntNumInput, AntSelectInput } from "../../components";
import { tileBrandOptions, tileSizeOptions, tileTypesOptions } from "../../constants/products";
import { ETileTypes } from "../../enums";
import { IndianRupee } from "lucide-react";

const TilesForm = () => {

    const [design, setDesign] = useState('');
    const [color, setColor] = useState('');
    const [tileType, setTileType] = useState(ETileTypes.WALL);
    const [tileSize, setTileSize] = useState('');
    const [tileBrand, setTileBrand] = useState('');
    const [sqftRate, setSqftRate] = useState(0);
    const [noOfBoxes, setNoOfBoxes] = useState(0);
    const [pcsPerBox, setPcsPerBox] = useState(0);
    const [boxRate, setBoxRate] = useState(0);
  
  return (
    <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-8">
      <AntInput
        label="Design Name"
        name='design'
        value={design}
        valueChange={(value) => setDesign(value)}
        placeholder='Eg. Pupa, Silica, Melium,...'
      />

      <AntInput
        label="color"
        name='color'
        value={color}
        valueChange={(value) => setColor(value)}
        placeholder='Eg. White, Dark,...'
      />

      <AntSelectInput
        showSearch={true}
        label="tile size"
        name='size'
        placeholder='Search the size'
        optionsArray={tileSizeOptions}
        selectChange={(value) => setTileSize(value)}
        selectedValue={tileSize}
      />
      
      <AntSelectInput
        showSearch={true}
        label="brand"
        name='brand'
        placeholder='Choose the brand'
        optionsArray={tileBrandOptions}
        selectChange={(value) => setTileBrand(value)}
        selectedValue={tileBrand}
      />
      
      <AntSelectInput
        label="tile type"
        name='type'
        optionsArray={tileTypesOptions}
        selectChange={(value) => setTileType(value)}
        selectedValue={tileType}
        defaultValue={tileType}
      />

      <AntNumInput
        label="SQFT. Rate"
        name='sqftRate'
        prefix={<IndianRupee className="size-4 label-text" />}
        valueChange={(value) => setSqftRate(value)}
        precision={2}
        placeholder='How much rate per sqft.?'
        value={sqftRate}
      />

      <AntNumInput
        label="No. of Boxes Available"
        name='noOfBoxes'
        suffix={noOfBoxes > 1 ? 'Boxes' : 'Box'}
        // addonBefore={<Box className="size-5 label-text" />}
        valueChange={(value) => setNoOfBoxes(value)}
        placeholder='No. of Boxes Available'
        value={noOfBoxes}
      />

      <AntNumInput
        label="No. of pieces per box"
        name='pcsPerBox'
        suffix={pcsPerBox > 1 ? 'Pcs' : 'Pc'}
        valueChange={(value) => setPcsPerBox(value)}
        placeholder='How many pieces per box?'
        value={pcsPerBox}
      />

      <AntNumInput
        label="Box Rate"
        name='boxRate'
        prefix={<IndianRupee className="size-4 label-text" />}
        valueChange={(value) => setBoxRate(value)}
        precision={2}
        placeholder='How much rate per box?'
        value={boxRate}
      />
    </div>
  );
}
export default TilesForm;