import { useSelector } from "react-redux";
import { Badge } from "antd";
import { Heart, Pencil } from "lucide-react";
import { EUserRoles } from "../../enums";

const ProductCard = () => {
  
  const { user } = useSelector(state => state.auth);
  const role = user?.user.role;

  return (
    <div>
      <Badge.Ribbon className="py-1 px-4" text="Featured">
        <div className="card card-compact w-full shadow-xl hover:shadow-2xl transition duration-300">
          <figure className="relative">
            <img
              className="w-full h-64 object-cover"
              src="https://skytouchceramic.com/uploads/pages/Modern%20Wall%20Tiles%20Designs.webp"
              alt="Shoes" />
            <button className="btn btn-circle btn-sm shadow-md absolute top-2 left-2">
              {role === EUserRoles.ADMIN ? (
                <Pencil className="size-5" />
              ) : (
                <Heart className="size-5" />
              )}
            </button>
            <span className="absolute font-thin rounded-md tracking-wider badge badge-md badge-ghost bottom-2 left-2">200x200</span>
          </figure>
          <div className="card-body space-y-1">
            <div className="flex items-start justify-between gap-5">
              <h2 className="card-title text-base">Silica</h2>
              <div className="badge badge-success">$21</div>
            </div>
            <div className="card-actions">
              <div className="badge badge-error badge-outline">Somany</div>
              <div className="badge badge-outline">Wall Tile</div>
            </div>
          </div>
        </div>
      </Badge.Ribbon>
    </div>
  );
}
export default ProductCard;