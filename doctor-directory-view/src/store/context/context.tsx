// UserContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";
import { Booking, BookingContextType } from "../../utils/types";
import { toast } from "sonner";

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBookingState] = useState<Booking[] | any>([]);
  const [specialties, setSpecialties] = useState<string | null>("");
  const [search, setSearch] = useState<string | null>("");
  const [availability, setAvailability] = useState<boolean | null>(true);

  const setBooking = (value: Booking) => {
    const updatedBookings = [...booking, value];
    Cookies.set("booking", JSON.stringify(updatedBookings));
    setBookingState(updatedBookings);
    toast.success("Booking saved successfully!");
  };

  const cancelBooking = (id: number, day: string, time: string) => {
    const updatedBookings = booking.filter(
      (booking: any) =>
        !(booking.id === id && booking.day === day && booking.time === time)
    );
    Cookies.set("booking", JSON.stringify(updatedBookings));
    setBookingState(updatedBookings);
    toast.success("Booking cancelled successfully!");
  };

  useEffect(() => {
    const savedBooking = Cookies.get("booking");
    if (savedBooking) {
      try {
        const parsed = JSON.parse(savedBooking);
        setBookingState(parsed);
      } catch (error) {
        console.error("Error Reading cookie", error);
      }
    }
  }, []);

  return (
    <BookingContext.Provider
      value={{
        booking,
        setBooking,
        specialties,
        setSpecialties,
        search,
        setSearch,
        availability,
        setAvailability,
        cancelBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("Error: useBooking must be used within a BookingProvider");
  }
  return context;
};
