import { Bath, BrickWall, Grid2X2, InspectionPanel, SquareParking, Toilet } from "lucide-react";
import { MdOutlineKitchen } from "react-icons/md";

export const productCategoryOptions = [
  { label: "Tiles", value: "tiles", icon: InspectionPanel },
  { label: "Sanitary Ware", value: "sanitary-ware", icon: Toilet },
  { label: "Kitchen Fittings", value: "kitchen-fittings", icon: MdOutlineKitchen },
  { label: "Bath Fittings", value: "bath-fittings", icon: Bath },
];

export const tileTypesOptions = [
  { label: "wall", value: "wall", icon: BrickWall },
  { label: "floor", value: "floor", icon: Grid2X2 },
  { label: "parking", value: "parking", icon: SquareParking },
];

export const tileBrandOptions = [
  { label: "kag", value: "kag" },
  { label: "rak", value: "rak" },
  { label: "somany", value: "somany" },
  { label: "anuj", value: "anuj" },
];

export const tileSizeOptions = [
  { label: "100x100", value: "100x100" },
  { label: "200x200", value: "200x200" },
  { label: "300x300", value: "300x300" },
];