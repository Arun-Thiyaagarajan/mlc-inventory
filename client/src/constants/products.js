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

// Just Sample Data, Later will remove
export const sampleData = [
  {
    id: 1,
    name: "Hart Hagerty",
    country: "United States",
    job: "Desktop",
    company: "Zemlak",
    color: "Purple",
    image: "https://img.daisyui.com/images/profile/demo/2@94.webp",
  },
  {
    id: 2,
    name: "Brice Swyre",
    country: "China",
    job: "Tax Accountant",
    company: "Carroll",
    color: "Red",
    image: "https://img.daisyui.com/images/profile/demo/3@94.webp",
  },
  {
    id: 3,
    name: "Marjy Ferencz",
    country: "Russia",
    job: "Office",
    company: "Rowe",
    color: "Crimson",
    image: "https://img.daisyui.com/images/profile/demo/4@94.webp",
  },
  {
    id: 4,
    name: "Yancy Tear",
    country: "Brazil",
    job: "Community",
    company: "Wyman",
    color: "Indigo",
    image: "https://img.daisyui.com/images/profile/demo/5@94.webp",
  },
];