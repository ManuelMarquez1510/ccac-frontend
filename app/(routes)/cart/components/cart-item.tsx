// import ProductImageMinuature from "@/components/shared/product-image-miniature";
// import ProductTasteOrigin from "@/components/shared/product-taste-origin";
// import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
// import { ProductType } from "@/types/product";
import { X } from "lucide-react";

// interface CartItemProps {
//     product: ProductType
// }

const CartItem = (props: CartItemProps) => {
  // const { product } = props
  // const { removeItem } = useCart()

  return (
    <li className="flex py-6 border-b">
      {/* <ProductImageMinuature slug={product.attributes.slug} url={product.attributes.images.data[0].attributes.url} /> */}
      <img src={"/arquitectura.jpg"} alt="Image" className="" width={100} height={100} />
      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{"AutoCAD Básico"}</h2>
          <p className="font-bold">{"$5000"}</p>

          {/* <ProductTasteOrigin taste={product.attributes.taste} origin={product.attributes.origin} /> */}
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
