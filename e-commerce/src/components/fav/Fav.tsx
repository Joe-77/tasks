import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToFav, favItem } from "../../redux/slices/fav/favSlice";
import { ProductProps } from "../../types/products";
import { formatURI } from "../../utils/format";
import { FaHeart } from "react-icons/fa6";

export default function Fav() {
  const favorites = useSelector(favItem);
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen bg-purple-50 p-6 font-sans">
      <div className="container mx-auto px-4 md:px-0 lg:w-[85%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Fav</h1>
          <div className="text-sm text-gray-600 flex items-center gap-3">
            <Link to={"/"} className="text-blue-600">
              Home
            </Link>
            <span>{`<`}</span>
            <span>Fav</span>
          </div>
        </div>
        {/* Favorites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites?.map((item: ProductProps) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <Link
                to={`/product/${formatURI(item.title)}`}
                state={{
                  data: item,
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-64"
                  loading="lazy"
                />
              </Link>
              <div className="p-4 bg-white text-sm text-gray-600">
                <h2 className="font-bold">{item.title}</h2>

                <div className="flex items-center justify-between mt-5">
                  <span className="text-gray-400">
                    ${item.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => dispatch(addProductToFav(item))}
                    className="text-red-600 cursor-pointer"
                  >
                    <FaHeart size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
