import { useDispatch, useSelector } from "react-redux";
import {
  cartItem,
  clearCart,
  decrementProduct,
  deleteProduct,
  incrementProduct,
} from "../../redux/slices/cart/cartSlice";
import { useMemo } from "react";
import { ProductProps } from "../../types/products";
import { Link } from "react-router-dom";

export default function Cart() {
  const items = useSelector(cartItem);
  const dispatch = useDispatch();

  // Sample data if cart is empty (for demonstration)

  // Memoized total calculation
  const total = useMemo(() => {
    return items.reduce(
      (acc: any, item: any) => acc + item.price * item.quantity,
      0
    );
  }, [items]);

  return (
    <div className="min-h-screen bg-purple-50 p-6 font-sans">
      <div className="container mx-auto px-4 md:px-0 lg:w-[85%]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Cart</h1>
          <div className="text-sm text-gray-600 flex items-center gap-3">
            <Link to={"/"} className="text-blue-600">
              Home
            </Link>
            <span>{`<`}</span>
            <span>Cart</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between lg:gap-20">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow p-6 mb-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Checkout
              </button>
              <button
                onClick={() => dispatch(clearCart())}
                className="text-gray-600 flex items-center cursor-pointer"
              >
                <span className="mr-2">🗑️</span> Clear Cart
              </button>
            </div>

            {items.map((item: ProductProps) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 border-b last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="w-12 h-12 rounded"
                  />
                  <div>
                    <p className="text-sm">
                      <span className="font-semibold">Time:</span> 5:00
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-semibold">
                    {item.price.toLocaleString()} USD
                  </p>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => dispatch(decrementProduct(item))}
                      className="w-8 h-8 bg-gray-200 rounded cursor-pointer"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementProduct(item))}
                      className="w-8 h-8 bg-gray-200 rounded cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(deleteProduct(item))}
                    className="text-red-500 cursor-pointer"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Total Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit lg:w-[300px]">
            <div className="flex items-start justify-between">
              <h2 className="text-xl font-semibold ">Total</h2>
              <p className="text-lg">{total.toLocaleString()} USD</p>
            </div>
            <div className="flex justify-between items-center my-4">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-blue-500 text-white px-6 py-2 rounded cursor-pointer w-full"
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
