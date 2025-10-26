import React from 'react'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Wifi, Snowflake, Car, Utensils, MapPin } from 'lucide-react'

const listings = [
  {
    id: 'p1',
    title: 'Cozy PG near IIT Main Gate',
    location: 'Powai, Mumbai',
    rent: 12000,
    type: 'PG',
    amenities: ['wifi', 'ac', 'kitchen', 'parking'],
  },
  {
    id: 'p2',
    title: '2BHK Sharing for Girls',
    location: 'Koramangala, Bengaluru',
    rent: 15500,
    type: 'Sharing Room',
    amenities: ['wifi', 'kitchen'],
  },
  {
    id: 'p3',
    title: 'Hostel with Meals Included',
    location: 'Viman Nagar, Pune',
    rent: 9000,
    type: 'Hostel',
    amenities: ['wifi', 'parking'],
  },
  {
    id: 'p4',
    title: 'Studio Apartment near Campus',
    location: 'Sector 62, Noida',
    rent: 20000,
    type: 'Apartment',
    amenities: ['wifi', 'ac', 'parking'],
  },
]

const AmenityIcon = ({ a }) => {
  if (a === 'wifi') return <Wifi size={16} className="text-slate-600" />
  if (a === 'ac') return <Snowflake size={16} className="text-slate-600" />
  if (a === 'kitchen') return <Utensils size={16} className="text-slate-600" />
  if (a === 'parking') return <Car size={16} className="text-slate-600" />
  return null
}

const FilterBar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-3">
      <input className="flex-1 rounded-xl border border-slate-200 px-3 py-2 outline-none" placeholder="Location" />
      <select className="flex-1 rounded-xl border border-slate-200 px-3 py-2 outline-none">
        <option>Any type</option>
        <option>PG</option>
        <option>Hostel</option>
        <option>Flat</option>
        <option>Sharing Room</option>
        <option>Apartment</option>
      </select>
      <select className="flex-1 rounded-xl border border-slate-200 px-3 py-2 outline-none">
        <option>Any availability</option>
        <option>Immediate</option>
        <option>Next month</option>
      </select>
      <input className="flex-1 rounded-xl border border-slate-200 px-3 py-2 outline-none" placeholder="Max price (₹)" />
      <button className="rounded-xl bg-slate-900 text-white px-4 py-2">Apply</button>
    </div>
  )
}

const Card = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.35 }}
      className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
    >
      <div className="relative">
        {/* Image placeholder: replace with real uploaded image URLs in production */}
        <div className="h-44 w-full bg-gradient-to-tr from-slate-200 to-slate-100" aria-label="Property photo (upload real images)"></div>
        <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-700 border border-slate-200">
          {item.type}
        </div>
        <button className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 border border-slate-200 hover:bg-white">
          <Heart size={18} className="text-slate-700" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900 leading-snug">{item.title}</h3>
          <div className="text-right">
            <div className="text-slate-900 font-bold">₹{item.rent.toLocaleString()}</div>
            <div className="text-xs text-slate-500">per month</div>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-sm text-slate-600">
          <MapPin size={16} className="text-slate-500" /> {item.location}
        </div>
        <div className="mt-3 flex items-center gap-2">
          {item.amenities.map((a) => (
            <span key={a} className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-700">
              <AmenityIcon a={a} /> {a}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm text-slate-800 hover:bg-slate-50">View Details</button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-3 py-2 text-sm hover:bg-slate-800">
              <MessageCircle size={16} /> Chat
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const RoommateCTA = () => {
  return (
    <motion.div
      id="roommate"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-tr from-sky-50 to-emerald-50 p-6 md:p-8"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Find your perfect roommate</h3>
          <p className="mt-2 text-slate-600 max-w-2xl">Create a student profile with budget, preferred location, and lifestyle tags. Match with students nearby and start a friendly chat.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="rounded-xl bg-slate-900 text-white px-4 py-3 hover:bg-slate-800">Create Profile</a>
          <a href="#" className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-800 hover:bg-slate-50">Browse Students</a>
        </div>
      </div>
    </motion.div>
  )
}

const PopularListings = () => {
  return (
    <section id="listings" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Popular Listings</h2>
            <p className="mt-1 text-slate-600">Handpicked places near top campuses with trusted owners.</p>
          </div>
          <a href="#" className="hidden md:inline-flex rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 hover:bg-slate-50">View all</a>
        </div>

        <div className="mt-6">
          <FilterBar />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {listings.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>

        <RoommateCTA />
      </div>
    </section>
  )
}

export default PopularListings
