// UserContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

type Booking = {
  id: string;
  name: string;
  date: string;
};

type BookingContextType = {
  booking: Booking[] | undefined;
  setBooking: (booking: Booking[]) => void;
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [booking, setBookingState] = useState<Booking[] | undefined>(undefined);

  const setBooking = (value: Booking[]) => {
    Cookies.set("booking", JSON.stringify(value));
    setBookingState(value);
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
    <BookingContext.Provider value={{ booking, setBooking }}>
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
