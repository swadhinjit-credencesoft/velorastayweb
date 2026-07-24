"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCheckIn,
  setCheckOut,
  setAdults,
  setChildren,
  setRooms,
} from "@/store/slices/bookingSlice";
import Icon from "@/components/Icon/Icon";
import styles from "./SearchBar.module.scss";

const BOOKING_BASE = "https://bookone.io/Velora-Stays";

interface SearchBarProps {
  variant?: "hero" | "compact";
}

function buildBookingUrl(
  checkIn: string | null,
  checkOut: string | null,
  adults: number,
  children: number,
  rooms: number,
): string {
  const params = new URLSearchParams();
  params.set("bookingEngine", "true");

  if (checkIn) {
    const d = new Date(checkIn);
    params.set("checkinDay", String(d.getDate()));
    params.set("checkinMonth", String(d.getMonth() + 1));
    params.set("checkinYear", String(d.getFullYear()));
  }

  if (checkOut) {
    const d = new Date(checkOut);
    params.set("checkoutDay", String(d.getDate()));
    params.set("checkoutMonth", String(d.getMonth() + 1));
    params.set("checkoutYear", String(d.getFullYear()));
    params.set("checkOut", checkOut);
    params.set("toDate", checkOut);
    params.set("date_to", checkOut);
  }

  if (checkIn && checkOut) {
    const diff = new Date(checkOut).getTime() - new Date(checkIn).getTime();
    const nights = Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    params.set("nights", String(nights));
  } else {
    params.set("nights", "1");
  }

  const totalGuests = adults + children;
  params.set("numGuests", String(totalGuests));
  params.set("numAdults", String(adults));
  params.set("Children", String(children));
  params.set("rooms", String(rooms));

  return `${BOOKING_BASE}?${params.toString()}`;
}

export default function SearchBar({ variant = "hero" }: SearchBarProps) {
  const dispatch = useAppDispatch();
  const { checkIn, checkOut, adults, children, rooms } = useAppSelector(
    (state) => state.booking,
  );

  useEffect(() => {
    if (!checkIn) {
      const today = new Date();
      const tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      dispatch(setCheckIn(today.toISOString().split("T")[0]));
      dispatch(setCheckOut(tomorrow.toISOString().split("T")[0]));
    }
  }, [checkIn, dispatch]);

  const guestOptions = Array.from({ length: 6 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} Guest${i === 0 ? "" : "s"}`,
  }));

  const villaOptions = Array.from({ length: 5 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} Villa${i === 0 ? "" : "s"}`,
  }));

  const bookingUrl = buildBookingUrl(checkIn, checkOut, adults, children, rooms);

  return (
    <div className={`${styles.searchBar} ${styles[variant]}`}>
      <div className={styles.field}>
        <label className={styles.label}>
          <Icon icon="lucide:calendar" width={16} height={16} />
          Check-in
        </label>
        <input
          type="date"
          className={styles.input}
          value={checkIn ?? ""}
          onChange={(e) => dispatch(setCheckIn(e.target.value))}
          min={new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <Icon icon="lucide:calendar-check" width={16} height={16} />
          Check-out
        </label>
        <input
          type="date"
          className={styles.input}
          value={checkOut ?? ""}
          onChange={(e) => dispatch(setCheckOut(e.target.value))}
          min={checkIn ?? new Date().toISOString().split("T")[0]}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <Icon icon="lucide:users" width={16} height={16} />
          Guests
        </label>
        <select
          className={styles.select}
          value={adults}
          onChange={(e) => dispatch(setAdults(Number(e.target.value)))}
        >
          {guestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <Icon icon="lucide:bed-double" width={16} height={16} />
          Villas
        </label>
        <select
          className={styles.select}
          value={rooms}
          onChange={(e) => dispatch(setRooms(Number(e.target.value)))}
        >
          {villaOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.searchBtn} ${styles.searchBtnAccent}`}
      >
        <Icon icon="lucide:search" width={18} height={18} />
        Search
      </a>
    </div>
  );
}
