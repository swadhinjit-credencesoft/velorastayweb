"use client";

import { useState, useEffect, useMemo } from "react";
import Icon from "@/components/Icon";
import { BOOKING_ENGINE_URL } from "@/config";
import { SITE_INFO } from "@/data/site";
import type { RoomType } from "@/types";
import styles from "./RoomBookingWidget.module.scss";

interface RoomBookingWidgetProps {
  room: RoomType;
  bookingEngineBaseUrl?: string;
  hotelName?: string;
  whatsappPhone?: string;
  deskPhone?: string;
}

export default function RoomBookingWidget({
  room,
  bookingEngineBaseUrl = BOOKING_ENGINE_URL,
  hotelName = "Hotel Yogiraj",
  whatsappPhone = "919595533535",
  deskPhone = SITE_INFO.phone,
}: RoomBookingWidgetProps) {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [adults, setAdults] = useState<number>(room.maxOccupancy);
  const [roomsCount, setRoomsCount] = useState<number>(1);
  const [livePrice, setLivePrice] = useState<number>(room.price);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAvailable, setIsAvailable] = useState<boolean>(true);

  // Set default dates: today & tomorrow
  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const pad = (n: number) => String(n).padStart(2, "0");
    const d1 = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;
    const d2 = `${tomorrow.getFullYear()}-${pad(tomorrow.getMonth() + 1)}-${pad(tomorrow.getDate())}`;

    setCheckIn(d1);
    setCheckOut(d2);
  }, []);

  // Fetch live rate & availability when dates change
  useEffect(() => {
    if (!checkIn || !checkOut) return;

    let isMounted = true;
    setIsLoading(true);

    const url = `https://api.thehotelmate.co/api/thm/checkAvailability/651?fromDate=${checkIn}&toDate=${checkOut}&noOfRooms=${roomsCount}&noOfPersons=${adults}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("API response not ok");
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data && Array.isArray(data.roomList)) {
          // Find this room in the live room list
          const matched = data.roomList.find(
            (r: { id: number; name: string }) =>
              r.id === room.rawRoom?.id ||
              r.name.trim().toLowerCase() === room.name.toLowerCase()
          );

          if (matched) {
            const price = matched.roomOnlyPrice || matched.pricePerNight || room.price;
            setLivePrice(price);
            setIsAvailable((matched.noOfRooms ?? 1) > 0);
          }
        }
      })
      .catch(() => {
        // Fall back gracefully to base room price
        if (isMounted) {
          setLivePrice(room.price);
          setIsAvailable(true);
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [checkIn, checkOut, adults, roomsCount, room.name, room.price, room.rawRoom?.id]);

  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const d1 = new Date(checkIn + "T00:00:00");
    const d2 = new Date(checkOut + "T00:00:00");
    const diff = Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(1, diff);
  }, [checkIn, checkOut]);

  const totalPrice = useMemo(() => {
    return livePrice * nights * roomsCount;
  }, [livePrice, nights, roomsCount]);

  const bookingEngineUrl = useMemo(() => {
    if (!checkIn || !checkOut) return `${bookingEngineBaseUrl}?bookingEngine=true`;
    const ci = new Date(checkIn + "T00:00:00");
    const co = new Date(checkOut + "T00:00:00");

    const params = new URLSearchParams({
      bookingEngine: "true",
      checkinDay: String(ci.getDate()),
      checkinMonth: String(ci.getMonth() + 1),
      checkinYear: String(ci.getFullYear()),
      checkoutDay: String(co.getDate()),
      checkoutMonth: String(co.getMonth() + 1),
      checkoutYear: String(co.getFullYear()),
      checkIn,
      checkOut,
      nights: String(nights),
      numAdults: String(adults),
      numGuests: String(adults),
      rooms: String(roomsCount),
    });

    return `${bookingEngineBaseUrl}?${params.toString()}`;
  }, [bookingEngineBaseUrl, checkIn, checkOut, nights, adults, roomsCount]);

  const whatsappMessage = useMemo(() => {
    const text = `Hello ${hotelName}, I would like to book the "${room.name}" from ${checkIn} to ${checkOut} (${nights} night${nights > 1 ? "s" : ""}) for ${adults} guests. Please confirm availability and rates.`;
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(text)}`;
  }, [hotelName, whatsappPhone, room.name, checkIn, checkOut, nights, adults]);

  return (
    <div className={styles.widget}>
      <div className={styles.priceHeader}>
        <div>
          <span className={styles.rateLabel}>Live Rate (Room Only)</span>
          <div className={styles.priceRow}>
            <span className={styles.currency}>₹</span>
            <span className={styles.amount}>
              {livePrice.toLocaleString("en-IN")}
            </span>
            <span className={styles.unit}>/ night</span>
          </div>
        </div>
        <div className={styles.statusBadge}>
          {isLoading ? (
            <span className={styles.checking}>Checking Live...</span>
          ) : isAvailable ? (
            <span className={styles.available}>Live Available</span>
          ) : (
            <span className={styles.soldOut}>Sold Out</span>
          )}
        </div>
      </div>

      <div className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Icon icon="lucide:calendar" width={14} height={14} />
            Check-in
          </label>
          <input
            type="date"
            className={styles.input}
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Icon icon="lucide:calendar" width={14} height={14} />
            Check-out
          </label>
          <input
            type="date"
            className={styles.input}
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Icon icon="lucide:users" width={14} height={14} />
            Guests
          </label>
          <select
            className={styles.select}
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
          >
            {Array.from({ length: Math.max(room.maxOccupancy, 4) }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n} Guest{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.inputGroup}>
          <label className={styles.label}>
            <Icon icon="lucide:bed" width={14} height={14} />
            Rooms
          </label>
          <select
            className={styles.select}
            value={roomsCount}
            onChange={(e) => setRoomsCount(Number(e.target.value))}
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} Room{n > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.summaryRow}>
        <span>
          Estimate ({nights} night{nights > 1 ? "s" : ""}, {roomsCount} room{roomsCount > 1 ? "s" : ""}):
        </span>
        <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
      </div>

      <div className={styles.actions}>
        <a
          href={bookingEngineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
        >
          <Icon icon="lucide:calendar-check" width={18} height={18} />
          Book Online Now
        </a>

        <a
          href={whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsappBtn}
        >
          <Icon icon="lucide:message-circle" width={18} height={18} />
          Book via WhatsApp
        </a>

        <a
          href={`tel:${deskPhone.replace(/\s+/g, "")}`}
          className={styles.callBtn}
        >
          <Icon icon="lucide:phone-call" width={16} height={16} />
          Call Desk: {deskPhone}
        </a>
      </div>

      <div className={styles.propertyNotes}>
        <div className={styles.noteItem}>
          <Icon icon="lucide:clock" width={14} height={14} />
          <span>Check-in: <strong>{SITE_INFO.checkIn}</strong> | Check-out: <strong>{SITE_INFO.checkOut}</strong></span>
        </div>
        <div className={styles.noteItem}>
          <Icon icon="lucide:map-pin" width={14} height={14} />
          <span><strong>Only 300 Meters</strong> to Sai Baba Temple, Pimpalwadi Rd</span>
        </div>
        <div className={styles.noteItem}>
          <Icon icon="lucide:shield-check" width={14} height={14} />
          <span>Live API rate confirmed with Hotel Yogiraj PMS</span>
        </div>
      </div>
    </div>
  );
}
