"use client";

import { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import { CONTACT_CONTENT, CONTACT_INFO, CONTACT_DEPARTMENT } from "@/data/contact";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", department: "" });

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">{CONTACT_CONTENT.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{CONTACT_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{CONTACT_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form className="bg-white rounded-xl p-8 shadow space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name" required className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <input type="email" placeholder="Email Address" required className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  <select className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none text-gray-600" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })}>
                    <option value="">Select Department</option>
                    {CONTACT_DEPARTMENT.map((d) => (<option key={d.id} value={d.id}>{d.name}</option>))}
                  </select>
                </div>
                <input type="text" placeholder="Subject" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                <textarea placeholder="Your Message" rows={5} required className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-amber-500 outline-none resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">Send Message</button>
              </form>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="bg-white rounded-xl p-6 shadow space-y-4">
                {CONTACT_INFO.filter((c) => c.primary).map((info) => (
                  <div key={info.label} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-0.5 font-bold">•</span>
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      {info.href.startsWith("http") ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 hover:text-amber-600 transition-colors">{info.value}</a>
                      ) : info.href.startsWith("tel:") || info.href.startsWith("mailto:") ? (
                        <a href={info.href} className="font-medium text-gray-900 hover:text-amber-600 transition-colors">{info.value}</a>
                      ) : (
                        <p className="font-medium text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-gray-900">Departments</h3>
              <div className="space-y-3">
                {CONTACT_DEPARTMENT.map((d) => (
                  <div key={d.id} className="bg-white rounded-lg p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-900 text-sm">{d.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{d.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
