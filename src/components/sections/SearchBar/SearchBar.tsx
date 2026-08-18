"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCheckIn,
  setCheckOut,
  setAdults,
  setChildren,
} from "@/store/slices/bookingSlice";
import Icon from "@/components/Icon/Icon";
import styles from "./SearchBar.module.scss";

const BOOKING_ENGINE_URL = "https://bookone.io/Hotel-The-Queen-S-Head-Delhi?bookingEngine=true";

interface SearchBarProps {
  variant?: "hero" | "compact";
}

export default function SearchBar({ variant = "hero" }: SearchBarProps) {
  const dispatch = useAppDispatch();
  const { checkIn, checkOut, adults, children } =
    useAppSelector((state) => state.booking);

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
          Adults
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
          <Icon icon="lucide:user-round" width={16} height={16} />
          Children
        </label>
        <select
          className={styles.select}
          value={children}
          onChange={(e) => dispatch(setChildren(Number(e.target.value)))}
        >
          {[0, 1, 2, 3].map((n) => (
            <option key={n} value={n}>
              {n === 0 ? "No children" : `${n} Child${n === 1 ? "" : "ren"}`}
            </option>
          ))}
        </select>
      </div>

      <a
        href={BOOKING_ENGINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.searchBtn} ${styles.searchBtnAccent}`}
      >
        <Icon icon="lucide:calendar-check" width={18} height={18} />
        Check Availability
      </a>
    </div>
  );
}
