export type Booking = {
  id: string;
  name: string;
  date: string;
};

export type BookingContextType = {
  booking: Booking[] | undefined;
  setBooking: any;
  specialties: string | null | undefined | any;
  setSpecialties: (value: string | null) => void;
  search: string | null | undefined | any;
  setSearch: (value: string | null) => void;
  availability: boolean | null | undefined | any;
  setAvailability: (value: boolean | null) => void;
  cancelBooking: any;
};
