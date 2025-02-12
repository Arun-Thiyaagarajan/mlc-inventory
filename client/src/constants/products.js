import { Bath, InspectionPanel, Toilet } from "lucide-react";
import { MdOutlineKitchen } from "react-icons/md";

export const productCategoryOptions = [
  { label: "Tiles", value: "tiles", icon: InspectionPanel },
  { label: "Sanitary Ware", value: "sanitary-ware", icon: Toilet },
  { label: "Kitchen Fittings", value: "kitchen-fittings", icon: MdOutlineKitchen },
  { label: "Bath Fittings", value: "bath-fittings", icon: Bath },
];
