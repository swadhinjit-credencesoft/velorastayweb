import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BookingState {
  checkIn: string | null;
  checkOut: string | null;
  adults: number;
  children: number;
  rooms: number;
  selectedRoomId: string | null;
  promoCode: string;
  step: "search" | "select" | "details" | "payment" | "confirmation";
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
}

const initialState: BookingState = {
  checkIn: null,
  checkOut: null,
  adults: 2,
  children: 0,
  rooms: 1,
  selectedRoomId: null,
  promoCode: "",
  step: "search",
  guestName: "",
  guestEmail: "",
  guestPhone: "",
  specialRequests: "",
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setCheckIn(state, action: PayloadAction<string>) {
      state.checkIn = action.payload;
    },
    setCheckOut(state, action: PayloadAction<string>) {
      state.checkOut = action.payload;
    },
    setDates(state, action: PayloadAction<{ checkIn: string; checkOut: string }>) {
      state.checkIn = action.payload.checkIn;
      state.checkOut = action.payload.checkOut;
    },
    setAdults(state, action: PayloadAction<number>) {
      state.adults = action.payload;
    },
    setChildren(state, action: PayloadAction<number>) {
      state.children = action.payload;
    },
    setRooms(state, action: PayloadAction<number>) {
      state.rooms = action.payload;
    },
    setSelectedRoomId(state, action: PayloadAction<string>) {
      state.selectedRoomId = action.payload;
    },
    setPromoCode(state, action: PayloadAction<string>) {
      state.promoCode = action.payload;
    },
    setStep(state, action: PayloadAction<BookingState["step"]>) {
      state.step = action.payload;
    },
    setGuestInfo(state, action: PayloadAction<{ name: string; email: string; phone: string }>) {
      state.guestName = action.payload.name;
      state.guestEmail = action.payload.email;
      state.guestPhone = action.payload.phone;
    },
    setSpecialRequests(state, action: PayloadAction<string>) {
      state.specialRequests = action.payload;
    },
    resetBooking() {
      return initialState;
    },
  },
});

export const {
  setCheckIn,
  setCheckOut,
  setDates,
  setAdults,
  setChildren,
  setRooms,
  setSelectedRoomId,
  setPromoCode,
  setStep,
  setGuestInfo,
  setSpecialRequests,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
