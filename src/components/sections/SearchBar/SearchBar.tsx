"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setCheckIn,
  setCheckOut,
  setAdults,
  setChildren,
  setRooms,
} from "@/store/slices/bookingSlice";
import Button from "@/components/ui/Button/Button";
import Icon from "@/components/Icon/Icon";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  variant?: "hero" | "compact";
}

export default function SearchBar({ variant = "hero" }: SearchBarProps) {
  const dispatch = useAppDispatch();
  const { checkIn, checkOut, adults, children, rooms } = useAppSelector(
    (state) => state.booking,
  );

  const guestOptions = Array.from({ length: 6 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} Guest${i === 0 ? "" : "s"}`,
  }));

  const villaOptions = Array.from({ length: 5 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1} Villa${i === 0 ? "" : "s"}`,
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

      <Button
        variant="accent"
        size="lg"
        href="/villas"
        icon="lucide:search"
        className={styles.searchBtn}
      >
        Search
      </Button>
    </div>
  );
}
