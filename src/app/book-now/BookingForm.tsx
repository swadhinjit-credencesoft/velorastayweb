"use client";

import { useState } from "react";
import { SITE_INFO, WHATSAPP_LINK } from "@/data/site";
import { ROOMS } from "@/data/rooms";

const telHref = `tel:${SITE_INFO.phone.replace(/\s+/g, "")}`;

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    adults: "2",
    children: "0",
    rooms: "1",
    roomType: ROOMS[0].name,
    message: "",
  });

  const update = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      `New Booking Request — ${SITE_INFO.name}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "—"}`,
      `Check-in: ${form.checkIn || "To be confirmed"}`,
      `Check-out: ${form.checkOut || "To be confirmed"}`,
      `Guests: ${form.adults} adult(s), ${form.children} child(ren)`,
      `Rooms: ${form.rooms}`,
      `Room type: ${form.roomType}`,
    ];
    if (form.message) lines.push(`Message: ${form.message}`);
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://api.whatsapp.com/send?phone=${SITE_INFO.whatsapp}&text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/30 bg-white";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Book Direct</h2>
            <p className="text-gray-600 leading-relaxed">
              Send your request to our reservations team and we will confirm
              availability and best rates. You can also call or WhatsApp us
              directly — our front desk is available 24 hours.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Chat on WhatsApp
            </a>
            <a
              href={telHref}
              className="block text-center bg-amber-500 hover:bg-amber-600 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Call {SITE_INFO.phone}
            </a>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5 text-sm text-gray-600 space-y-2">
            <p><strong className="text-gray-900">Check-in:</strong> {SITE_INFO.checkIn}</p>
            <p><strong className="text-gray-900">Check-out:</strong> {SITE_INFO.checkOut}</p>
            <p><strong className="text-gray-900">Cancellation:</strong> Free up to 24 hours before check-in</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 bg-white rounded-2xl shadow p-6 sm:p-8 space-y-5">
          <h3 className="text-xl font-bold text-gray-900">Booking Request</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={labelClass} htmlFor="name">Full Name *</label>
              <input id="name" required value={form.name} onChange={update("name")} className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label className={labelClass} htmlFor="phone">Phone *</label>
              <input id="phone" required type="tel" value={form.phone} onChange={update("phone")} className={inputClass} placeholder="+91 ..." />
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="email">Email (optional)</label>
              <input id="email" type="email" value={form.email} onChange={update("email")} className={inputClass} placeholder="you@example.com" />
            </div>
            <div>
              <label className={labelClass} htmlFor="checkIn">Check-in</label>
              <input id="checkIn" type="date" value={form.checkIn} onChange={update("checkIn")} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="checkOut">Check-out</label>
              <input id="checkOut" type="date" value={form.checkOut} onChange={update("checkOut")} className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="adults">Adults</label>
              <select id="adults" value={form.adults} onChange={update("adults")} className={inputClass}>
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="children">Children</label>
              <select id="children" value={form.children} onChange={update("children")} className={inputClass}>
                {[0, 1, 2, 3].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="rooms">Rooms</label>
              <select id="rooms" value={form.rooms} onChange={update("rooms")} className={inputClass}>
                {[1, 2, 3, 4, 5].map((n) => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="roomType">Room Type</label>
              <select id="roomType" value={form.roomType} onChange={update("roomType")} className={inputClass}>
                {ROOMS.map((room) => <option key={room.id} value={room.name}>{room.name}</option>)}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">Special Requests (optional)</label>
              <textarea id="message" rows={4} value={form.message} onChange={update("message")} className={inputClass} placeholder="Early check-in, airport pickup, dietary needs..." />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3.5 rounded-lg font-semibold transition-colors"
          >
            Send Booking Request via WhatsApp
          </button>
          <p className="text-xs text-gray-500 text-center">
            Submitting opens WhatsApp with your details pre-filled. Our team will confirm availability.
          </p>
        </form>
      </div>
    </section>
  );
}
