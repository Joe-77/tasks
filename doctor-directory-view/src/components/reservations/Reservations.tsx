import { useBooking } from "../../store/context/context";
import { FaCalendarAlt, FaClock, FaUserMd, FaDollarSign } from "react-icons/fa";
import { formatURI } from "../../utils/format";
import { Link } from "react-router-dom";

export default function Reservations() {
  const { booking, cancelBooking } = useBooking();

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Reservations</h1>

      {booking?.length === 0 ? (
        <div className="text-center text-gray-500">
          You have no reservations yet.
        </div>
      ) : (
        <div className="grid gap-6">
          {booking?.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex  items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <FaUserMd className="text-blue-600" />
                  {item.name}
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <FaCalendarAlt className="text-green-600" />
                  {item.day}
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <FaClock className="text-yellow-500" />
                  {item.time}
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-[1px] text-lg text-green-700 font-bold">
                  <FaDollarSign />
                  {item.price?.replace("$", "")}
                </div>
                <div className="mt-5 flex gap-2 items-center flex-wrap">
                  <button
                    onClick={() => cancelBooking(item.id, item.day, item.time)}
                    className="text-xs bg-red-600 duration-500 hover:bg-red-800 px-4 py-2 text-white rounded-lg cursor-pointer "
                  >
                    Cancel
                  </button>
                  <Link
                    to={{
                      pathname: `/doctor/${formatURI(item.name)}-${item.id}`,
                    }}
                    state={{
                      id: item.id,
                    }}
                    className="text-xs bg-blue-600 duration-500 hover:bg-blue-800 px-4 py-2 text-white rounded-lg cursor-pointer "
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
