import { useParams } from "react-router-dom";
import { doctors } from "../../utils/doctors";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Share from "./Share";
import { useBooking } from "../../store/context/context";

export default function Details() {
  const { id } = useParams();
  const doctorId = id?.split("-").pop();
  const doctor = doctors.find((doc) => doc.id === Number(doctorId));

  const { setBooking, booking }: any = useBooking();

  const [showAvailability, setShowAvailability] = useState(false);

  if (!doctor) return <div className="text-center py-10">Doctor not found</div>;

  return (
    <div className="container px-4 md:px-0 lg:w-[85%] mx-auto mt-8">
      <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-md p-6">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full md:w-1/2 h-96 rounded-xl shadow-sm"
        />

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
          <p className="text-gray-500 mb-1 text-lg">{doctor.specialty}</p>

          <div className="flex items-center gap-2 mb-2 text-yellow-500">
            <FaStar />
            <span className="text-gray-700">
              {doctor.rating.score} ({doctor.rating.reviews} reviews)
            </span>
          </div>

          <p className="text-xl font-semibold text-green-600 mb-2">
            {doctor.price}
          </p>

          <p className="text-gray-600 mb-3">{doctor.description}</p>

          <p className="text-gray-600 mb-4">
            <strong>Location:</strong> {doctor.location}
          </p>

          <Share />

          {Object.keys(doctor.availability).length > 0 && (
            <button
              onClick={() => setShowAvailability((prev) => !prev)}
              className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition cursor-pointer"
            >
              {showAvailability
                ? "Hide Available Slots"
                : "Show Available Slots"}
            </button>
          )}
        </div>
      </div>

      {showAvailability && doctor.availability && (
        <div className="mt-8 bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Available Slots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(doctor.availability).map(([day, times]) => (
              <div key={day}>
                <h3 className="font-bold mb-2">{day}</h3>
                <div className="flex flex-wrap gap-2">
                  {(times as string[]).map((time, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-full w-fit shadow-sm"
                    >
                      <span className="mr-3 text-sm">{time}</span>
                      <button
                        onClick={() =>
                          setBooking({
                            id: doctor.id,
                            name: doctor.name,
                            price: doctor.price,
                            day,
                            time,
                          } as any)
                        }
                        disabled={
                          booking?.find((e: any) => e.day === day) &&
                          booking?.find((e: any) => e.time === time)
                        }
                        className="bg-green-600 text-white px-3 py-1 rounded-full text-sm hover:bg-green-700 transition disabled:bg-gray-300 disabled:cursor-no-drop"
                      >
                        {booking?.find((e: any) => e.day === day) &&
                        booking?.find((e: any) => e.time === time)
                          ? "Booked"
                          : "Book Now"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
