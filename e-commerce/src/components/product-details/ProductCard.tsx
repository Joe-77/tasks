import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ProductProps } from "../../types/products";
import { formatURI } from "../../utils/format";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/slices/cart/cartSlice";
import { addProductToFav, favItem } from "../../redux/slices/fav/favSlice";

export default function ProductCard({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  const allFavProducts = useSelector(favItem);

  const isFav = allFavProducts?.find(
    (e: { id: number }) => e.id === product.id
  );

  return (
    <div
      key={product.id}
      className="cursor-pointer bg-white text-black shadow-lg rounded-xl pb-3"
    >
      <div className="relative">
        <Link
          to={`/product/${formatURI(product?.title)}`}
          state={{
            data: product,
          }}
        >
          <div className="relative">
            <img
              src={product.images[0]}
              alt="thumbnail"
              loading="lazy"
              className="h-60 w-full rounded-xl shadow-lg"
            />
            <div className="overlay absolute top-0 left-0 bg-black/50 w-full h-full rounded-xl"></div>
          </div>
          <div className="px-5 mt-3 block">
            <div className="flex items-center justify-between">
              <h3 className="mt-2 text-lg font-bold">{product.title}</h3>
            </div>

            <div className="border-t-[2px] border-gray-300 mt-3 pt-3 flex items-center gap-2">
              <h5>${product.price}</h5>
            </div>
          </div>
        </Link>

        <div className="absolute w-full top-[190px] text-white z-[10] px-3 flex items-center gap-2">
          <span
            onClick={() => dispatch(addProductToCart(product))}
            className=" cursor-pointer bg-black/40 p-2 rounded-full hover:bg-black/60 transition-colors"
          >
            <CiShoppingCart size={22} />
          </span>

          <span
            onClick={() => dispatch(addProductToFav(product))}
            className={`cursor-pointer bg-black/40 p-2 rounded-full hover:bg-black/60 transition-colors ${
              isFav && "text-red-600"
            }`}
          >
            <FaHeart size={22} />
          </span>
        </div>
      </div>
    </div>
  );
}
