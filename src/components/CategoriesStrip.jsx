import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Home, Users, BedDouble, Hotel } from 'lucide-react'

const categories = [
  { name: 'PG', icon: Hotel },
  { name: 'Hostel', icon: Home },
  { name: 'Flat', icon: Building2 },
  { name: 'Sharing Room', icon: Users },
  { name: 'Apartment', icon: BedDouble },
]

const CategoriesStrip = () => {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {categories.map(({ name, icon: Icon }, idx) => (
            <motion.a
              key={name}
              href="#listings"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Icon size={18} />
              </span>
              <span className="font-medium text-slate-800">{name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesStrip
