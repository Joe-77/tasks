import { useRef, useState } from "react";
import { useFetchProductServicesQuery } from "../../redux/services/currency/currencyApi";
import { BeatLoader } from "react-spinners";
import Paginate from "../paginate/paginate";
import { ProductProps } from "../../types/products";
import ProductCard from "../product-details/ProductCard";

const categories = ["All", "clothes", "food", "furniture", "miscellaneous"];
const prices = [
  { label: "All", value: "all" },
  { label: "Under $50", value: "under50" },
  { label: "$50 - $100", value: "50to100" },
  { label: "Above $100", value: "above100" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const myRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useFetchProductServicesQuery({
    offset: Number(currentPage) * 10,
    limit: 20,
  });

  return (
    <div className="container px-4 md:px-0 lg:w-[85%] mx-auto mt-8">
      <h1 className="text-3xl font-mono mb-6">Most Products</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Price Filter */}
        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 outline-none"
        >
          {prices.map((price) => (
            <option key={price.value} value={price.value}>
              {price.label}
            </option>
          ))}
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-64"
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center">
          <BeatLoader size={25} color="green" />
        </div>
      ) : (
        <div>
          <div
            ref={myRef}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {data
              ?.filter((product: ProductProps) => {
                const titleMatch = product.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());

                const categoryMatch =
                  selectedCategory === "All" ||
                  product.category.name.toLowerCase() ===
                    selectedCategory.toLowerCase();

                const price = product.price;
                const priceMatch =
                  selectedPrice === "all" ||
                  (selectedPrice === "under50" && price < 50) ||
                  (selectedPrice === "50to100" &&
                    price >= 50 &&
                    price <= 100) ||
                  (selectedPrice === "above100" && price > 100);

                return titleMatch && categoryMatch && priceMatch;
              })
              .map((product: ProductProps) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
          </div>

          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={3}
            ref={myRef}
          />
        </div>
      )}
    </div>
  );
}
