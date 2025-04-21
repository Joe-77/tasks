import { useBooking } from "../../store/context/context";
import { specialties } from "../../utils/doctors";

export default function Filter() {
  const { setSpecialties, setSearch, availability, setAvailability } =
    useBooking();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <select
        onChange={(e) => setSpecialties(e.target.value)}
        className="w-full max-w-xs rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm transition-all duration-300 ease-in-out focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 hover:shadow-md"
      >
        <option value="">Filter by specialty</option>
        {specialties.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search by doctor's name"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xs rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 shadow-sm transition-all duration-300 ease-in-out focus:border-blue-500 focus:outline-none focus"
      />
      <div className="flex items-center gap-5">
        <button
          onClick={() => setAvailability(true)}
          className={`px-4 py-2 rounded-xl ${
            availability && `bg-green-500 text-white hover:bg-green-600 `
          } transition-all duration-300 shadow-md cursor-pointer border-green-600`}
        >
          Available
        </button>
        <button
          onClick={() => setAvailability(false)}
          className={`px-4 py-2 rounded-xl ${
            !availability && "bg-red-500 text-white hover:bg-red-600"
          } transition-all duration-300 shadow-md cursor-pointer`}
        >
          Not Available
        </button>
      </div>
    </div>
  );
}
