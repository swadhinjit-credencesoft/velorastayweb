"use client";

import { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import { VILLAS } from "@/data/villas";

export default function BookingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    checkIn: "", checkOut: "", roomType: "", adults: "1", children: "0",
    firstName: "", lastName: "", email: "", phone: "", specialRequests: "",
    paymentMethod: "card",
  });

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-16 pt-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Booking", href: "/booking" }]} />
          <h1 className="text-4xl font-bold text-white mt-4">Book Your Stay</h1>
          <p className="mt-3 text-gray-300">Complete your reservation in a few simple steps.</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-10">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step >= s ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-500"}`}>{s}</div>
                <span className={`text-sm hidden sm:inline ${step >= s ? "text-gray-900 font-semibold" : "text-gray-400"}`}>
                  {s === 1 ? "Details" : s === 2 ? "Guest Info" : "Payment"}
                </span>
                {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-amber-500" : "bg-gray-200"}`} />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <div className="bg-white rounded-xl p-8 shadow space-y-5">
              <h2 className="text-xl font-bold text-gray-900">Stay Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
                  <input type="date" className="w-full border rounded-lg px-4 py-3" value={form.checkIn} onChange={(e) => setForm({ ...form, checkIn: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
                  <input type="date" className="w-full border rounded-lg px-4 py-3" value={form.checkOut} onChange={(e) => setForm({ ...form, checkOut: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Villa Type</label>
                  <select className="w-full border rounded-lg px-4 py-3" value={form.roomType} onChange={(e) => setForm({ ...form, roomType: e.target.value })}>
                    <option value="">Select Villa</option>
                    {VILLAS.map((r) => (<option key={r.id} value={r.slug}>{r.name}</option>))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                    <select className="w-full border rounded-lg px-4 py-3" value={form.adults} onChange={(e) => setForm({ ...form, adults: e.target.value })}>
                      {[1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                    <select className="w-full border rounded-lg px-4 py-3" value={form.children} onChange={(e) => setForm({ ...form, children: e.target.value })}>
                      {[0, 1, 2, 3].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <button onClick={() => setStep(2)} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Continue</button>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-xl p-8 shadow space-y-5">
              <h2 className="text-xl font-bold text-gray-900">Guest Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" placeholder="First Name" required className="w-full border rounded-lg px-4 py-3" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                <input type="text" placeholder="Last Name" required className="w-full border rounded-lg px-4 py-3" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                <input type="email" placeholder="Email Address" required className="w-full border rounded-lg px-4 py-3" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <input type="tel" placeholder="Phone Number" required className="w-full border rounded-lg px-4 py-3" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <textarea placeholder="Special Requests (optional)" rows={3} className="w-full border rounded-lg px-4 py-3 resize-none" value={form.specialRequests} onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} />
              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Back</button>
                <button onClick={() => setStep(3)} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Continue</button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-xl p-8 shadow space-y-5">
              <h2 className="text-xl font-bold text-gray-900">Payment</h2>
              <div className="grid grid-cols-3 gap-3">
                {["card", "upi", "bank"].map((m) => (
                  <button key={m} onClick={() => setForm({ ...form, paymentMethod: m })} className={`border-2 rounded-lg py-3 text-sm font-semibold transition-colors ${form.paymentMethod === m ? "border-amber-500 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}>
                    {m === "card" ? "Credit/Debit Card" : m === "upi" ? "UPI" : "Net Banking"}
                  </button>
                ))}
              </div>
              <div className="bg-gray-50 rounded-lg p-5 space-y-2">
                <div className="flex justify-between text-sm"><span className="text-gray-500">Villa Type</span><span className="font-medium">{form.roomType || "Not selected"}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Dates</span><span className="font-medium">{form.checkIn || "—"} to {form.checkOut || "—"}</span></div>
                <div className="flex justify-between text-sm"><span className="text-gray-500">Guests</span><span className="font-medium">{form.adults} Adults, {form.children} Children</span></div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="border-2 border-gray-300 text-gray-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">Back</button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex-1">Confirm Booking</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
