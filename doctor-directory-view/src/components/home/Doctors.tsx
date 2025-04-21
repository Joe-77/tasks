import { Link } from "react-router-dom";
import { doctors } from "../../utils/doctors";

import Card from "../doctor/Card";

export default function Doctors() {
  const filter = doctors.filter((e) => e.rating.score >= 4.8).slice(0, 8);

  return (
    <div className="container px-4 md:px-0 lg:w-[85%] mx-auto mt-5">
      <h1 className="text-xl font-bold">Most Popular</h1>
      <Card data={filter} />
      <div className="my-8 flex justify-center">
        <Link
          to={"/doctors"}
          className="bg-teal-600 px-5 py-2 rounded-lg text-white cursor-pointer duration-500 hover:scale-105"
        >
          More
        </Link>
      </div>
    </div>
  );
}
