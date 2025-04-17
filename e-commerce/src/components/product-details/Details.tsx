import { useLocation } from "react-router-dom";
import ProductSlider from "./Slider";
import { FaOpencart } from "react-icons/fa6";
import { useFetchProductServicesQuery } from "../../redux/services/currency/currencyApi";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/slices/cart/cartSlice";
export default function Details() {
  const dispatch = useDispatch();
  const state = useLocation().state;
  const details = state?.data;
  const { data } = useFetchProductServicesQuery({
    offset: 0,
    limit: 200,
  });

  function getRandomItems() {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  }

  return (
    <section>
      <div className="container px-4 md:px-0 lg:w-[85%] mx-auto mt-8">
        <div className="flex flex-col lg:flex-row gap-10 p-6 rounded-md justify-between">
          <div className="flex-grow">
            <div>
              <h1 className="text-gray-500 text-2xl font-bold mb-4 capitalize font-mono">
                {details.category.slug}
              </h1>
              <h3 className="text-3xl font-bold leading-11">{details.title}</h3>
              <p className="text-gray-600 mt-5">{details.description}</p>
              <p className="text-gray-600 mt-5 text-2xl font-extrabold">
                ${details.price}
              </p>
            </div>

            <button
              onClick={() => dispatch(addProductToCart(details))}
              className="flex items-center justify-center gap-2 w-fit px-8 bg-blue-600 text-white py-3 rounded-lg cursor-pointer mt-5"
            >
              <span>Buy Now</span>
              <FaOpencart />
            </button>
          </div>
          <ProductSlider product={details} />
        </div>
        <div className="flex flex-col gap-8 mt-16">
          <h2 className="text-2xl font-bold">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {getRandomItems()?.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
