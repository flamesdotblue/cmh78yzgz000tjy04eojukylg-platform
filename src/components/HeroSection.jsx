import React from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, IndianRupee, Building2, Send } from 'lucide-react'

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 md:pt-20 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
        >
          Find verified student rentals and roommates you can trust
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 text-slate-600 max-w-2xl"
        >
          Browse hostels, PGs, and apartments near campus. Chat instantly and book with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <div className="flex-1 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3">
              <MapPin size={18} className="text-slate-500" />
              <input placeholder="City or college" className="w-full outline-none text-slate-800 placeholder:text-slate-400" />
            </div>
            <div className="flex-1 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3">
              <IndianRupee size={18} className="text-slate-500" />
              <input placeholder="Max budget (₹/month)" className="w-full outline-none text-slate-800 placeholder:text-slate-400" />
            </div>
            <div className="flex-1 flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3">
              <Building2 size={18} className="text-slate-500" />
              <select className="w-full bg-transparent outline-none text-slate-800">
                <option>Any type</option>
                <option>PG</option>
                <option>Hostel</option>
                <option>Flat</option>
                <option>Sharing Room</option>
                <option>Apartment</option>
              </select>
            </div>
            <button className="md:w-auto w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-3 hover:bg-slate-800 transition">
              <Search size={18} /> Search
            </button>
          </div>
        </motion.div>

        <div className="mt-6 flex flex-col sm:flex-row gap-3" id="list-your-property">
          <a href="#listings" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white px-5 py-3 shadow hover:opacity-95">
            List Property
          </a>
          <a href="#roommate" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-800 hover:bg-slate-50">
            <Send size={18} /> Find My Roommate
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
