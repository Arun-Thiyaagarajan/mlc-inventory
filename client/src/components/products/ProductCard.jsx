import { useSelector } from "react-redux";
import { Badge } from "antd";
import { Heart, IndianRupee, Pencil } from "lucide-react";
import { EUserRoles } from "../../enums";
import { toTitleCase } from "../../utils/stringUtils";

const ProductCard = ({ product }) => {
  const { user } = useSelector(state => state.auth);
  const role = user?.user.role;

  const productCard = (
    <div className="card card-compact w-full shadow-xl hover:shadow-2xl transition duration-300">
      <figure className="relative">
        <img
          className="w-full h-64 object-cover"
          src={product.images?.[0] || "https://via.placeholder.com/200"}
          alt={product.design}
        />
        <button className="btn btn-circle btn-sm shadow-md absolute top-2 left-2">
          {role === EUserRoles.ADMIN ? <Pencil className="size-5" /> : <Heart className="size-5" />}
        </button>
        <span className="absolute font-thin rounded-md tracking-wider badge badge-md badge-ghost bottom-2 left-2">
          {product.size}
        </span>
      </figure>
      <div className="card-body space-y-1">
        <div className="flex items-start justify-between gap-5">
          <h2 className="card-title text-base">{toTitleCase(product.design)}</h2>
          <div className="badge badge-success">
            <IndianRupee className="size-3" /> {product.sqftRate}
          </div>
        </div>
        <div className="card-actions">
          <div className="badge badge-error badge-outline">{toTitleCase(product.brand)}</div>
          <div className="badge badge-outline">{toTitleCase(product.type)}</div>
        </div>
      </div>
    </div>
  );

  return product.featured ? (
    <Badge.Ribbon className="py-1 px-4" text="Featured">
      {productCard}
    </Badge.Ribbon>
  ) : (
    productCard
  );
};

export default ProductCard;