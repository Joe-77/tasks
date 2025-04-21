import { Link } from "react-router-dom";
import { formatURI } from "../../utils/format";

interface DoctorProps {
  id: number;
  name: string;
  image: string;
  specialty: string;
  rating: { score: number };
}

export default function Card({ data }: { data: DoctorProps[] }) {
  return (
    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data?.map((doctor: DoctorProps) => (
        <div key={doctor.id}>
          <Link
            to={{
              pathname: `/doctor/${formatURI(doctor.name)}-${doctor.id}`,
            }}
            state={{
              id: doctor.id,
            }}
            className="relative"
          >
            <div className="relative">
              <img
                className="rounded-md w-full h-80"
                src={doctor.image}
                alt={doctor.name}
                loading="lazy"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <div className="bg-white shadow p-4">
              <h2 className="text-sm font-semibold mb-2">{doctor.name}</h2>
              <p className="text-sm font-medium text-gray-400">
                {doctor.specialty}
              </p>
            </div>
            <div className="absolute top-2 right-2 bg-teal-600 z-20 px-3 py-1 rounded-lg">
              <span className="text-sm text-white">{doctor.rating.score}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
