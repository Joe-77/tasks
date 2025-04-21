import { useEffect, useState } from "react";
import { useBooking } from "../../store/context/context";
import { doctors } from "../../utils/doctors";
import Filter from "./Filter";
import Card from "./Card";

export default function Doctors() {
  const { specialties, search, availability } = useBooking();

  const [matchesAvailability, setMatchesAvailability]: any = useState([]);

  useEffect(() => {
    if (availability) {
      const availableDoctors = doctors.filter(
        (doctor) => Object.keys(doctor.availability || {}).length > 0
      );
      setMatchesAvailability(availableDoctors);
    } else {
      setMatchesAvailability(
        doctors.filter(
          (doctor) => Object.keys(doctor.availability || {}).length === 0
        )
      );
    }
  }, [availability, doctors]);

  const filteredDoctors = doctors.filter((doctor: any) => {
    const matchesSpecialty =
      specialties.length === 0 || doctor.specialty.includes(specialties);

    const matchesSearch = doctor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return (
      matchesSpecialty && matchesSearch && matchesAvailability.includes(doctor)
    );
  });

  return (
    <section>
      <div className="container mx-auto px-4 md:px-0 lg:w-[85%] mt-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Doctors</h2>
          <Filter />
        </div>
        <Card data={filteredDoctors} />
      </div>
    </section>
  );
}
