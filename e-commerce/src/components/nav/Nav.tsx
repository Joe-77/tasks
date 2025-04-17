import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartItem } from "../../redux/slices/cart/cartSlice";
import { favItem } from "../../redux/slices/fav/favSlice";

export default function Nav() {
  const cart = useSelector(cartItem);
  const fav = useSelector(favItem);

  return (
    <header>
      <nav className="w-full bg-white shadow py-5">
        <div className="container mx-auto px-4 md:px-0 lg:w-[85%] flex items-center justify-between">
          <Link to={"/"}>
            <img
              src="https://th.bing.com/th/id/OIP.Jc4_fewy2DM4SNzlqWDRYAHaHa?rs=1&pid=ImgDetMain"
              alt="logo"
              loading="lazy"
              className="h-10 w-full"
            />
          </Link>
          <div className="flex items-center gap-5">
            <Link
              to={"/cart"}
              className="w-10 h-10 text-xl border border-teal-600 rounded-full flex justify-center items-center duration-500 hover:bg-teal-600 hover:text-white relative"
            >
              <FaCartShopping />
              <span className="absolute top-[-10px] right-[-10px] text-xs bg-black text-white w-5 h-5 flex justify-center items-center rounded-full">
                {cart?.length}
              </span>
            </Link>
            <Link
              to={"/favorites"}
              className="w-10 h-10 text-xl border border-teal-600 rounded-full flex justify-center items-center duration-500 hover:bg-teal-600 hover:text-white relative"
            >
              <FaHeart />
              <span className="absolute top-[-10px] right-[-10px] text-xs bg-black text-white w-5 h-5 flex justify-center items-center rounded-full">
                {fav?.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
